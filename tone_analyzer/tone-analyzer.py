# tone-analyzer.py
#
# Call syntax:
#   python tone-analyzer.py hello.wav
#
# For the sound file hello.wav that comes with OpenVokaturi, the result should be:
#	Neutral: 0.760
#	Happy: 0.000
#	Sad: 0.238
#	Angry: 0.001
#	Fear: 0.000

import sys
import scipy.io.wavfile

sys.path.append("./")
import Vokaturi

os = sys.argv[2]

print ("Loading library...")
# NOTE: This is working for OSX, Linux, Win64. If this doesn't work on your machine, you might have to install some other
# Vokaturi library like the win32.dll file and change the relative path accordingly
if os == 'windows':
	Vokaturi.load("./OpenVokaturi-3-0-win64.dll")
elif os == 'linux':
	Vokaturi.load("./OpenVokaturi-3-0-linux64.so")
elif os == 'mac' or os == 'osx' or os == 'macos':
	Vokaturi.load("./OpenVokaturi-3-0-mac64.dylib")
print ("Analyzed by: %s" % Vokaturi.versionAndLicense())

print ("Reading sound file...")
file_name = sys.argv[1]
(sample_rate, samples) = scipy.io.wavfile.read(file_name)
print ("   sample rate %.3f Hz" % sample_rate)

print ("Allocating Vokaturi sample array...")
buffer_length = len(samples)
print ("   %d samples, %d channels" % (buffer_length, samples.ndim))
c_buffer = Vokaturi.SampleArrayC(buffer_length)
if samples.ndim == 1:  # mono
	c_buffer[:] = samples[:] / 32768.0
else:  # stereo
	c_buffer[:] = 0.5*(samples[:,0]+0.0+samples[:,1]) / 32768.0

print ("Creating VokaturiVoice...")
voice = Vokaturi.Voice (sample_rate, buffer_length)

print ("Filling VokaturiVoice with samples...")
voice.fill(buffer_length, c_buffer)

print ("Extracting emotions from VokaturiVoice...")
quality = Vokaturi.Quality()
emotionProbabilities = Vokaturi.EmotionProbabilities()
voice.extract(quality, emotionProbabilities)

if quality.valid:
	print ("Neutral: %.3f" % emotionProbabilities.neutrality)
	print ("Happy: %.3f" % emotionProbabilities.happiness)
	print ("Sad: %.3f" % emotionProbabilities.sadness)
	print ("Angry: %.3f" % emotionProbabilities.anger)
	print ("Fear: %.3f" % emotionProbabilities.fear)
else:
	print ("Not enough sonorancy to determine emotions")

voice.destroy()

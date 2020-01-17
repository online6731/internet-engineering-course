import socket
import random
import time
import threading

def time_check(tcp_socket):
	global ended

	while not ended:
		try:
			msg = tcp_socket.recv(1024).decode()
			if (msg == 'ended'):
				print('Game ended')
				ended = True
			else:
				started = True
		except:
			pass

ended = False

tcp_socket = socket.socket()
tcp_socket.connect(('', 18181))
threading.Thread(target=time_check, args=(tcp_socket,)).start()
tcp_socket.settimeout(2)

udp_socket = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
udp_socket.settimeout(2)

print('client started and socket created')

while not ended:
	try:
		udp_socket.sendto(str(random.randint(1, 100)).encode(), ('', 18188))
		print('new guess sent')
		if (udp_socket.recvfrom(1024)[0]).decode() == 'right':
			print('I won')
			break
		else:
			print('wrong answer')
	except:
		pass

	time.sleep(0.1)
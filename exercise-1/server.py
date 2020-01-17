import socket
import random
import threading
import time
from queue import Queue
import sys

user_sockets = []
ended = False
random_number = str(random.randint(1, 100))
print('server started with random number', random_number)

tcp_socket = socket.socket()
tcp_socket.bind(('', 18181))
tcp_socket.listen(100)
tcp_socket.settimeout(5)
print('TCP socket started')

udp_socket = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
udp_socket.bind(('', 18188))
udp_socket.settimeout(5)
print('UDP socket started')

def time_check(tcp_socket, address):
	global ended

	while not ended:
		try:
			tcp_socket.sendto(str(time.time()).encode(), address)
		except:
			pass
		time.sleep(0.1)

	tcp_socket.sendto('ended'.encode(), address)
	tcp_socket.close()


def new_tcp_client(tcp_socket, address):
	global ended
	global random_number
	global udp_socket

	threading.Thread(target=time_check, args=(tcp_socket, address)).start()

	while not ended:
		try:
			data, address = udp_socket.recvfrom(1024)
			data = data.decode()
			print('new guess received', data, random_number)

			if  data == random_number:
				udp_socket.sendto('right'.encode(), address)
				ended = True
			else:
				udp_socket.sendto('wrong'.encode(), address)
		except:
			pass

	udp_socket.close()

def start_server():
	global user_sockets

	while not ended:
		try:
			new_client_tcp_socket, address = tcp_socket.accept()
			print('new client connected')
			threading.Thread(target=new_tcp_client, args=(new_client_tcp_socket, address)).start()
		except:
			pass

server_thread = threading.Thread(target=start_server)
server_thread.start()

while not ended:
	pass

print('Game Ended')

sys.exit()
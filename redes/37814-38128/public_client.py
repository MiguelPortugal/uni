#!/usr/bin/env python3

import socket
import time
import pickle

HOST = '127.0.0.1'  # The server's hostname or IP address
PORT = 65432        # The port used by the server

TIPO_POLUENTE = 'O2'
FIRMWARE_VERSION = 'Alpha'
ID = 1
LOCAL = 'Algures'

VALOR = 1.56
UNIDADE = 'g/l'


msg = TIPO_POLUENTE + FIRMWARE_VERSION + str(ID)+ '\n' + LOCAL + str(VALOR) + UNIDADE

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect((HOST, PORT))
    while True:
        s.sendall(msg.encode())
        data = s.recv(1024)
        time.sleep(10)
        print('Received', repr(data))



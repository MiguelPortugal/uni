#!/usr/bin/env python3

import socket
import time
import pickle

HOST = '127.0.0.1'  # The server's hostname or IP address
PORT = 65432        # The port used by the server

TIPO_POLUENTE = 'C02'
FIRMWARE_VERSION = 'Alpha'
ID = '1'
LOCAL = 'Évora'

VALOR = '1.56'
UNIDADE = 'unidade'

msg = TIPO_POLUENTE + FIRMWARE_VERSION + str(ID)+ '\n' + LOCAL + str(VALOR) + UNIDADE

def sensor_status():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.connect((HOST, PORT))
        while True:
            s.sendall(ID.encode())
            time.sleep(0.4)
            s.sendall(VALOR.encode())
            time.sleep(0.4)
            s.sendall(UNIDADE.encode())
            time.sleep(0.4)
            s.sendall(FIRMWARE_VERSION.encode())
            time.sleep(0.4)
            data = s.recv(1024)
            print('Received', repr(data))
            time.sleep(10)




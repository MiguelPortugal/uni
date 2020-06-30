#!/usr/bin/env python3

import socket
import pickle
HOST = '127.0.0.1'  # Standard loopback interface address (localhost)
PORT = 65432        # Port to listen on (non-privileged ports are > 1023)
SENSOR_READINGS = []
SENSOR_STATUS = []
while True:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind((HOST, PORT))
        s.listen()
        conn, addr = s.accept()
        with conn:
            print('Connected by', addr)
            while True:
                data = conn.recv(1024)
                SENSOR_STATUS.append(data.decode())
                print(data.decode() + '\n')
                print(SENSOR_STATUS)
                if len(SENSOR_STATUS) == 4:
                    if len(SENSOR_READINGS)==10:
                       SENSOR_READINGS.pop() 
                    SENSOR_READINGS.append(SENSOR_STATUS)
                    SENSOR_STATUS = []
                if not data:
                    break
                conn.sendall(data)
                
                print(SENSOR_READINGS)


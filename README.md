This is the readme file of the error

the error that is currently occuring in my main program has been replicated into a smaller more readable version

The error i am currently facing is when i run both backned and frontend in firefox it workes as expected but the moment i run in a browser like brave the preflight request says rejected.

steps)
<br>
(adjust the cors origin in backend according to your frontend origin(website link))
<br>
->first you need to signup
<br>
->then signin

firefox

![image](https://github.com/user-attachments/assets/e5b80297-76bf-4aad-a13a-0606ebf94907)

of the requests
![image](https://github.com/user-attachments/assets/e362911e-dbea-4696-9dd5-324709716a7c)

Brave

![image](https://github.com/user-attachments/assets/f3e760e6-7243-4474-8abb-b17559753a38)

![image](https://github.com/user-attachments/assets/dd1436de-b9b1-459e-8e28-c63ffc935daa)

and an error 

xhr.js:195 
            
            
           GET http://localhost:3000/signin net::ERR_INTERNET_DISCONNECTED




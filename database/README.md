#######################################
Install docker and docker-compose


1. Whats is docker?
https://www.youtube.com/watch?v=_dfLOzuIg2o
https://youtu.be/-LeV_c1zG-s
https://www.docker.com/

2. Installing docker in Ubuntu (If you are using Mac/Windows. Bye!)

a) Install pre-reqs
sudo apt-get update
sudo apt-get install   ca-certificates     curl     gnupg     lsb-release

b) Add GPG Keys
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo   "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update

c) Install docker CLI
sudo apt-get install docker-ce docker-ce-cli containerd.io

d) Post installation steps
sudo groupadd docker    #dont worry if this fails just means the group is already there
sudo usermod -aG docker $USER
newgrp docker

e) Installing docker compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

f) Post installation check
Open a new terminal and check if the docker commands are working
docker -v
docker-compose -v

3. Using the docker to up postgres & pgadmin
a) docker-compose.yml in this folder has the YAML code to bring up a postgres server and a pgadmin server. You can control the variables using docker.env file
b) You can choose to edit the docker.env or keep the values as is
c) Bring up postgres and pgadmin - Open terminal in the folder containing docker-compose.yml and use the following command:
docker-compose up
You should see some thing like this:
Creating network "database_postgres" with driver "bridge"
Creating postgres ... done
Creating pgadmin  ... done
Attaching to postgres, pgadmin
d) Now pgadmin and a postgres server is running in you machine! Remember not to close the terminal :)

4. Connecting to postgres server using pgadmin
a) Open browser and go to localhost:9090
b) Type in the email and password you have provided in the docker.env file
c) In pgAdmin browser (top left)-> Right click on servers -> Create server
d) Give a name to the connection
e) Switch to Connection tab host->postgres dbname->from docker.env username->from docker.env password->from docker.env. Save password for later
f) Now you should be connected. Click on Tools->Query Tool. Start querying!!
 

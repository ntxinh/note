```
vagrant box add laravel/homestead

cd ~
git clone https://github.com/laravel/homestead.git Homestead
cd Homestead/
bash init.sh

Configuring Homestead
Windows: C:\Users\nguye\.homestead\Homestead.yaml
Linux: /home/xinhnguyen/.homestead/Homestead.yaml

Create id_rsa & id_rsa.pub in C:\Users\nguye\.ssh
cd ~
ssh-keygen -t rsa -C "you@homestead"

The Hosts File
Windows: C:\Windows\System32\drivers\etc\hosts
Linux: /etc/hosts
192.168.10.10  homestead.app

Launching The Vagrant Box
cd ~
cd Homestead/

vagrant up
vagrant halt
vagrant reload
vagrant reload --provision
vagrant ssh

DB_USERNAME=homestead
DB_PASSWORD=secret
```
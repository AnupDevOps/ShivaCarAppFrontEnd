# Deployment steps on EC2 instances.

## GitHub Sync 
Login into Ec2 instance using key from local. 


### Update Frontend code
/home/ubuntu
cd ShivaCarAppFrontEnd/
npm run build 
rm -R /var/www/html/react-app/build
sudo rm -R /var/www/html/react-app
sudo mv build /var/www/html/react-app
sudo systemctl restart nginx
cat /etc/nginx/nginx.conf
sudo vim /etc/nginx/nginx.conf
update with below block inside Server block.
```
server {
    listen 80;
    server_name 51.20.255.216;

    root /var/www/html/react-app;
    index index.html;
    
    location / {
        try_files $uri /index.html;
    }
}
```
### Update Backend code

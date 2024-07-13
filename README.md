## Getting Started

To start the service:

```bash
 sudo docker run -d -p 80:3000 divyansht85/get-me-a-chai:ec2
```

Open http://ec2-3-87-15-103.compute-1.amazonaws.com with your browser to see the result.

## Steps connect to EC2 instance using SSH client

1. Open an SSH client.

2. Locate your private key file. The key used to launch this instance is myKey.pem

3. Run this command, if necessary, to ensure your key is not publicly viewable.

   ```bash
   chmod 400 "myKey.pem"
   ```

4. Run this command to connect via SSH

   ```bash
   ssh -i "myKey.pem" ec2-user@ec2-3-87-15-103.compute-1.amazonaws.com
   ```

5. To exist SSH, type "exit" and press enter

## Command to restart docker deamon

```bash
sudo service docker restart
```

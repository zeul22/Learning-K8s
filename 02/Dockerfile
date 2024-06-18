FROM ubuntu
RUN apt-get update
RUN apt-get install -y ruby
COPY . /app
WORKDIR /app

# Build command:sudo docker build . -t build_name
# Run the command :sudo docker run build_name ruby hello.rb
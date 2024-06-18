
#After Compilation, There is no use of JVM, so we have used one to build the program
FROM openjdk as buildstage
COPY . /app
WORKDIR /app
RUN javac hello.java

# And this one to run it
FROM openjdk
COPY --from=buildstage /app/hello.class /app/
WORKDIR /app
CMD java hello

#Build: sudo docker build . -t build_name
#Run: sudo docker run buil_name


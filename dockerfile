# Use the official Tomcat image as the base
FROM tomcat:9.0

# Remove the default Tomcat apps to keep things clean
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy the React app build files to the ROOT of Tomcat's webapps
COPY build/ /usr/local/tomcat/webapps/ROOT/

# Expose port 8009 for AJP connections (Tomcat's default AJP port)
EXPOSE 8009

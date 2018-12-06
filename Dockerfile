FROM dmitry7887/alpine-node-git 
COPY . /mining-sensor-conditioning-monitoring-ui
RUN chmod 777 /mining-sensor-conditioning-monitoring-ui/run.sh
ENTRYPOINT ["sh", "-c", "/mining-sensor-conditioning-monitoring-ui/run.sh" ]

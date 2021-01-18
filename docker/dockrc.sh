
function clroxe() {
  docker-compose exec kroxed clroxe -u http://nodroxed:8888 --wallet-url http://localhost:8900 "$@"
}

function kroxed() {
  docker exec docker_nodroxed_1 kroxed "$@"
}

function pkill() {
  docker exec docker_nodroxed_1 pkill "$@"
}

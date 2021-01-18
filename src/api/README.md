# API

[./v1/chain.json](./api/chain.json)

Run [nodroxe](https://github.com/roxe/roxe) or make requests to a public node.

Basic API examples:
```bash
curl http://172.17.3.161:7878/v1/chain/get_info
echo '{"block_num_or_id": 1}' | curl http://172.17.3.161:7878/v1/chain/get_block -d @-
```

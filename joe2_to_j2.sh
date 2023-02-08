cat joe2.json | jq '.items[] | { title: .snippet.title, videoId: .snippet.resourceId.videoId }'  | sed 's/}/},/' > j2.json

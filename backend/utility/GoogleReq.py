from googleapiclient import discovery
import json

API_KEY = 'ENTER_YOUR_KEY'

def formatMsg(msg):
    analyze_request = {
    'comment': { 'text': 'example message' },
    'requestedAttributes': {'TOXICITY': {}, 'INSULT': {},  'THREAT': {}, 'IDENTITY_ATTACK': {}}
    }
    analyze_request['comment']['text'] = msg['message']
    return analyze_request

def analyzeMsg(msg):
    analyze_request = formatMsg(msg)
    client = discovery.build(
    "commentanalyzer",
    "v1alpha1",
    developerKey=API_KEY,
    discoveryServiceUrl="https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1",
    static_discovery=False,
    )
    response = client.comments().analyze(body=analyze_request).execute()
    toxicity = response['attributeScores']['TOXICITY']['summaryScore']['value']
    insult = response['attributeScores']['INSULT']['summaryScore']['value']
    threat = response['attributeScores']['THREAT']['summaryScore']['value']
    identity = response['attributeScores']['IDENTITY_ATTACK']['summaryScore']['value']
    return [toxicity, insult, threat, identity]


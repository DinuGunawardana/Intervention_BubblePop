let logs = [];

function logEvent(type, data = {}) {
  logs.push({
    type,
    timestamp: Date.now(),
    ...data
  });
}

function exportLogs() {
  console.log("SESSION DATA:", JSON.stringify(logs, null, 2));
}
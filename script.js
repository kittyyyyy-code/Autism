// JavaScript Example: Reading Entities
// Filterable fields: name, description, dm_id, setting, level_range, player_count, status, custom_rules, session_notes
async function fetchCampaignEntities() {
    const response = await fetch(`https://app.base44.com/api/apps/68d4356eacac7e3e7af0aa51/entities/Campaign`, {
        headers: {
            'api_key': '90aa4174952744078df804c355941df1', // or use await User.me() to get the API key
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
}

// JavaScript Example: Updating an Entity
// Filterable fields: name, description, dm_id, setting, level_range, player_count, status, custom_rules, session_notes
async function updateCampaignEntity(entityId, updateData) {
    const response = await fetch(`https://app.base44.com/api/apps/68d4356eacac7e3e7af0aa51/entities/Campaign/${entityId}`, {
        method: 'PUT',
        headers: {
            'api_key': '90aa4174952744078df804c355941df1', // or use await User.me() to get the API key
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    });
    const data = await response.json();
    console.log(data);
}

var members = ['amarans', 'hyun', 'Gwang'];
console.log(members[1]); // hyun

var i = 0;
while(i < members.length){
    console.log('array loop', members[i]);
    i = i + 1;
}

var roles = {
    'programmer' : 'amarans',
    'designer' : 'mac',
    'manager' : 'sososo'
};
console.log(roles.designer); // mac
console.log(roles['designer']); // mac

for(var name in roles){
    console.log('object =>', name, 'value =>',roles[name]);
}


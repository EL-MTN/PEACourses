const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./courses.json', { encoding: 'utf-8' }));
const oddities = JSON.parse(fs.readFileSync('./oddities.json', { encoding: 'utf-8' }));

let ptr = 0;

for (let i = 0; i < data.length; i++) {
	const course = data[i];

	if (course.pre != null) {
		if (course.pre.length != 6) {
			data[i] = oddities[ptr];
			ptr++;
		}
	}
}

fs.writeFileSync('./out.json', JSON.stringify(data), { flag: 'w+' });

const org1_depts = [
    {
        name: 'accounting',
        children: [
            { name: 'accounts payable', children: [] },
            { name: 'accounts receivable', children: [] }
        ],
    },
    {
        name: 'finance',
        children: [],
    },
];

const org2_depts = [
    {
        name: 'accounting',
        children: [
            { name: 'accounts payable', children: [] },
            {
                name: 'accounts receivable',
                children: [{ name: 'cash', children: [] }, { name: 'check', children: [] }],
            },
        ],
    },
    {
        name: 'finance',
        children: [{ name: 'investment', children: [] }],
    },
];

const start_tag = '<p>'
const end_tag = '</p>'
const start_li = '<li>'
const end_li = '</li>'

var output = start_tag
    for (const dept of org1_depts) {
    output += dept.name + start_li + dept.name.children + end_li
    }
output += end_tag

var output2 = start_tag
    for (const dept of org2_depts) {
    output2 += dept.name + start_li + dept.name.children + end_li
    }
output2 += end_tag

const outputDiv1 = document.getElementById('orgOutput1')
outputDiv1.innerHTML = output

const outputDiv2 = document.getElementById('orgOutput2')
outputDiv2.innerHTML = output2
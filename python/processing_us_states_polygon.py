import re

with open('us_states_polygon.txt', 'w') as f:
    with open('raw_us_states_polygon.txt') as fp:
        Lines = fp.readlines()
        for line in Lines:
            if line[0:12]=='<state name=':
                state=['dict.', re.findall(r'"([^"]*)"', line)[0], '=[']
                #print(''.join(state))
                f.write(''.join(state))
                f.write('\n')

            if line[0:11]=='<point lat=':
                coordinate=['{lat:', re.findall(r'"([^"]*)"', line)[0], ', lng:',re.findall(r'"([^"]*)"', line)[1],'},']
                #print(''.join(coordinate))
                f.write("    "+''.join(coordinate))
                f.write('\n')

            if (line[0:7]=='</state') and (line[7]!='s'):
                #print('];')
                f.write('];')
                f.write('\n')




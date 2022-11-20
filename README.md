# node-regex
Project for trying regex with node.

Read a contract pdf file and extract contracted persons

Regex used: 
```regexp
/(?<=[contratante|contratada]:\s{1})(?!\s)(.*\n.*?)$/gmi
```
- ?<= get the data after this group
- [contratante|contratada] contratante or contratada
- :\s{1}) get ':' and whitespace
- (?!\s)
- (?!\s) negative look around, ignore the ones with multiples whitespaces, like in the end of the file
- .*\n get everything until first line break
- .*? get everything until special character. prevent infinite loops
- $ search ends on the end of the line
- g global, return all the matches
- m multiline, Causes ^ and $ to match the begin/end of each line (not only begin/end of string)
- i insensitive, case-insensitive matches

Using: 
 - TDD BDD (mocha and chai), test coverage(nyc)
 - Fluent API pattern

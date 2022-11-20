# node-regex
Project for trying regex with node.

Read a contract pdf file and extract contracted persons

## Regex used: 

PDF File Persons
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

First letter
```regexp
/^(\w{1})([a-zA-Z]+$)/g
```
- ^ string start
- + one or more 
- (\w{1}) get first letter and makes a group
- ([a-zA-Z]+$) all letters lower and uppercase until special char
- g return all the matches
- 

Not Digit
```regexp
/\D/g
```
- \D everything that is not a digit(d = digit, D=not digit)

Person Street
```regexp
/(?<=\sa\s).*$/
```
- ?<= get the data after this group
- \sa\s) ' a '
- .*$ all until end of line

Person Neighborhood
```regexp
/(?<=\s).*$/
```
- ?<= get the data after this group
- \s space
- .* all chars

Person State
```regexp
/\.$/
```
- \.  dot


## Code
 - TDD BDD (mocha and chai), test coverage(nyc)
 - Fluent API pattern: The pattern objective is to chain task, like a pipeline, step by step
   and in the end execute a build step. Similar to builder pattern,
   the difference is that fluent api is for process and builder for constructing objects
- Regex safety with safeRegex
- Facade patter for abstracting complexity of the order of the calls in the Fluent API
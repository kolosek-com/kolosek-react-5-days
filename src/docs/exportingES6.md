# Export default

To export something by default, you use:
```
export default variableName;
```
Only one default export per file is permitted.

Importing a default export:
```
import Name from 'file_path';
```
When importing a default export, you can specify whatever name you want to use for the variable, as it doesn't affect the import in any way.


# Standard export
To export a variable or a constant, you use:
```
// constant
export const variableName = variableValue;
//variable
export var variableName = variableValue;
```

Importing a variable that isn't exported by default is done this way:
```
import { variableName } from 'file_path';
```
You need to specify the exact same name as of the exported variable, for import to work.


# Importing multiple variables
To import multiple variables, you just separate the names with a comma:
```
import { variableName1, variableName2 } from 'file_path';
```
You can also combine importing default and specific values:
```
import Name, { variableName } from 'file_path';
```

To import all of the exported stuff, you can do this:
```
import * as Name from 'file_path';
```
"Name" represents the name under which you want to access the imported stuff.


When importing from a library that's added as a dependency to the project, you just use name of dependency as a 'file_path'.
When importing from another file, you use relative path to that file.

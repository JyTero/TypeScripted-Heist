Parsin json into the proj




From Dictionary<string, BattleMoveData>, can I turn string into an enum type? Example: Dictionary items <"Stab",StabData> and <"throw",ThrowData> and turn them into Enum BattleMoveEnum.Stab and BattleMoveEnum.Throw

2. Generate the enum file with your tool

Since you’re already making a WinForms editor, you can extend it to automatically spit out a BattleMoveEnum.cs file whenever new battle moves are created. For example, it could generate:

public enum BattleMoveEnum
{
    Stab,
    Throw,
    Parry,
    SpinKick
}


That way, you guarantee the enum always matches the JSON keys.



### 2. Tell TypeScript what type it should be

You use a **type assertion**:

`type Person = {   name: string;   age: number; };  const person = JSON.parse(jsonString) as Person;`

Now `person` is strongly typed as `Person`.
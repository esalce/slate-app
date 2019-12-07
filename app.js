//Import the Slate editor factory
import { createEditor } from 'slate'

//Import the slate components and React plugin
import { Slate, Editable, withReact } from 'slate-react'

//Define App
const App = () =>{
    //Create a Slate editor object that won't change across renders.
    const editor = useMemo(() => withReact(createEditor(), []))
    return null
}


```jsx
import { useState } from 'react';

const [animal, setAnimal] = useState([]);

function updateAnimal(event) {
  const fieldName = event.target.name;
  let fieldValue = event.target.value;

  setAnimal({ ...animal, [fieldName]: fieldValue });
}

<AnimalForm animal={animal} onChange={updateAnimal} />;
```

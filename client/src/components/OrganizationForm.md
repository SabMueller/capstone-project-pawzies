```jsx
import { useState } from 'react';

const [organization, setOrganization] = useState([]);

function updateOrganization(event) {
  const fieldName = event.target.name;
  let fieldValue = event.target.value;

  setOrganization({ ...organization, [fieldName]: fieldValue });
}

<OrganizationForm organization={organization} onChange={updateOrganization} />;
```

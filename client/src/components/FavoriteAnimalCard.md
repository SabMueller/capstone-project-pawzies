```jsx
import { useState } from 'react';

const favorite = {
  name: 'Benny',
  picture:
    'https://res.cloudinary.com/pawzies/image/upload/v1624136821/duz0qv6jtvxt5nkbqu0b.jpg',
  type: 'cat',
  breed: 'European Shorthair',
  gender: 'male',
  characteristics: ['cuddly', 'friendly', 'good with kids'],
  description:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, delectus nihil, non ipsam rem sunt aut molestiae reiciendis voluptates mollitia laudantium nulla libero illum nemo, ipsum officiis inventore commodi maiores perspiciatis placeat vitae aspernatur quia! Sunt at natus quod dicta nobis reiciendis doloremque impedit dolor iusto consequuntur aliquid, amet hic.',
};

const [organizations, setOrganizations] = useState([
  {
    name: 'Cool Rescue Company',
  },
]);

<FavoriteAnimalCard
  organizations={organizations}
  favorite={favorite}
  onClick={console.log('success')}
/>;
```

Main window opens
- initilaises the creator logic classes.
- When a creator is opened, an instance if its window class is opened, which then uses the logic class to do its thing.
- Multiple editors can be open at the same time

Creator Windows have components
- Image
- MetaData
- Dropdown
- Selections
These have their own classes, so that both window and logic can have core baseclass, editor spesific class and added components.
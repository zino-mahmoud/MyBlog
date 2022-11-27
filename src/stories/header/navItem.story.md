# NavItem

This component is used as one navigation link.

It should always be used within the [NavContainer](src-stories-header-navcontainer-story-svelte).

## Props

| Prop Name | Prop type | Default value |
| --------- | --------- | ------------- |
| iconPath  | IconPath  | -             |
| text      | string    | -             |
| selected  | boolean   | false         |
| navLink   | string    | -             |

## Usage

```svelte
<NavItem iconPath={IconPath.HOUSE} text="Home" selected={true} navLink="home" />
```

# Icon

This component is used to display an icon.

The icon path should be defined in the `src/enums/iconPath.ts` file.

## Example

House Icon path

```ts
export enum IconPath {
	HOUSE = 'M10 /..',
}
```

## Props

| Prop Name | Prop type | Default value |
| --------- | --------- | ------------- |
| size      | number    | -             |
| iconPath  | IconPath  | -             |

## Usage

```svelte
<Icon size={28} iconPath={IconPath.HOUSE} />
```

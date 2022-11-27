export class IconData {
	private constructor(public readonly path: string, public readonly description: string) {}

	public static readonly HOUSE = new IconData(
		'M10 40V24H4L24 6l10 8.85V9h4v9.55L44 24h-6v16H26.5V28h-5v12Zm3-3h5.5V25h11v12H35V19.95l-11-10-11 10Zm5.5-12h11-11Zm1.25-5.5h8.5q0-1.65-1.275-2.725Q25.7 15.7 24 15.7q-1.7 0-2.975 1.075Q19.75 17.85 19.75 19.5Z',
		'Home icon'
	);

	public static readonly PERSON = new IconData(
		'M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Zm3-3h26v-1.7q0-.8-.475-1.525-.475-.725-1.175-1.075-3.2-1.55-5.85-2.125Q26.85 30 24 30t-5.55.575q-2.7.575-5.85 2.125-.7.35-1.15 1.075Q11 34.5 11 35.3Zm13-16.05q1.95 0 3.225-1.275Q28.5 18.4 28.5 16.45q0-1.95-1.275-3.225Q25.95 11.95 24 11.95q-1.95 0-3.225 1.275Q19.5 14.5 19.5 16.45q0 1.95 1.275 3.225Q22.05 20.95 24 20.95Zm0-4.5ZM24 37Z',
		'Person icon'
	);

	public static readonly EMAIL = new IconData(
		'M7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm17-15.1L7 13.75V37h34V13.75Zm0-3L40.8 11H7.25ZM7 13.75V11v26Z',
		'Email icon'
	);

	public static readonly MENU = new IconData(
		'M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z',
		'Menu icon'
	);

	public static readonly X = new IconData(
		'm12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z',
		'Close icon'
	);
}

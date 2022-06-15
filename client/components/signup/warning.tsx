interface IconProps {
	color?: string;
	isCheck?: boolean;
	isMine?: boolean;
}

const WarningIcon = ({ color }: IconProps) => (
	<svg
		width="11"
		height="9"
		viewBox="0 0 14 12"
		fill={color}
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M13.1653 9.76953L8.29534 0.799528C8.16641 0.562634 7.97599 0.364886 7.74413 0.227103C7.51227 0.0893208 7.24755 0.0166016 6.97784 0.0166016C6.70813 0.0166016 6.44341 0.0893208 6.21155 0.227103C5.97969 0.364886 5.78927 0.562634 5.66034 0.799528L0.785339 9.76953C0.657741 9.99856 0.592401 10.257 0.595832 10.5192C0.599262 10.7813 0.671343 11.038 0.80489 11.2636C0.938437 11.4892 1.12878 11.6759 1.35696 11.805C1.58514 11.9342 1.84317 12.0012 2.10534 11.9995H11.8453C12.1054 11.9998 12.361 11.9324 12.5871 11.8041C12.8133 11.6757 13.0021 11.4908 13.1353 11.2674C13.2684 11.0441 13.3411 10.7899 13.3464 10.53C13.3517 10.27 13.2893 10.0131 13.1653 9.78453V9.76953ZM6.23034 3.36953C6.23034 3.17062 6.30936 2.97985 6.45001 2.8392C6.59066 2.69855 6.78143 2.61953 6.98034 2.61953C7.17925 2.61953 7.37002 2.69855 7.51067 2.8392C7.65132 2.97985 7.73034 3.17062 7.73034 3.36953V6.81453C7.73034 7.01344 7.65132 7.20421 7.51067 7.34486C7.37002 7.48551 7.17925 7.56453 6.98034 7.56453C6.78143 7.56453 6.59066 7.48551 6.45001 7.34486C6.30936 7.20421 6.23034 7.01344 6.23034 6.81453V3.36953ZM7.00034 10.1245C6.83025 10.1245 6.66397 10.0741 6.52255 9.97959C6.38112 9.88509 6.27089 9.75078 6.2058 9.59363C6.14071 9.43649 6.12368 9.26357 6.15686 9.09675C6.19005 8.92993 6.27195 8.77669 6.39223 8.65641C6.5125 8.53614 6.66574 8.45424 6.83256 8.42105C6.99938 8.38787 7.1723 8.4049 7.32945 8.46999C7.48659 8.53508 7.62091 8.64531 7.7154 8.78674C7.8099 8.92816 7.86034 9.09444 7.86034 9.26453C7.86034 9.49261 7.76973 9.71136 7.60845 9.87264C7.44717 10.0339 7.22843 10.1245 7.00034 10.1245Z" />
	</svg>
);
export default WarningIcon;

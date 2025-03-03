/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";
import {
	Animate,
	AnglePickerControl,
	Autocomplete,
	BaseControl,
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardDivider,
	CardFooter,
	CardHeader,
	CardMedia,
	CheckboxControl,
	ClipboardButton,
	ColorIndicator,
	ColorPalette,
	ColorPicker,
	ComboboxControl,
	CustomSelectControl,
	Dashicon,
	DatePicker,
	DateTimePicker,
	Disabled,
	Draggable,
	DropZone,
	DropdownMenu,
	ExternalLink,
	Flex,
	FlexBlock,
	FlexItem,
	FocalPointPicker,
	FontSizePicker,
	FormFileUpload,
	FormToggle,
	FormTokenField,
	Guide,
	GuidePage,
	Icon,
	IconButton,
	InputControl,
	KeyboardShortcuts,
	MenuGroup,
	MenuItem,
	MenuItemsChoice,
	Modal,
	NavigableMenu,
	Notice,
	NoticeList,
	Panel,
	PanelBody,
	PanelRow,
	Placeholder,
	Popover,
	QueryControls,
	RadioControl,
	RangeControl,
	ResizableBox,
	ResponsiveWrapper,
	ScrollLock,
	SearchControl,
	SelectControl,
	Snackbar,
	SnackbarList,
	Spinner,
	TabPanel,
	TextControl,
	TextareaControl,
	ToggleControl,
	Toolbar,
	ToolbarButton,
	ToolbarGroup,
	Tooltip,
	TreeGrid,
	TreeSelect,
	VisuallyHidden,
	NavigatorProvider,
	NavigatorScreen,
	NavigatorButton,
	NavigatorBackButton,
	__experimentalGrid as Grid,
	__experimentalText as Text,
	__experimentalHeading as Heading,
	__experimentalView as View,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
	__experimentalSurface as Surface,
	__experimentalDivider as Divider,
} from "@wordpress/components";
import { useState } from "@wordpress/element";

import "./editor.scss";

// Error Boundary Component
class ComponentErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	render() {
		if (this.state.hasError) {
			return (
				<div
					style={{
						border: "2px solid red",
						padding: "10px",
						margin: "10px 0",
						backgroundColor: "#ffebee",
						color: "#333",
					}}
				>
					<h5 style={{ color: "red", margin: "0 0 8px 0" }}>
						❌ {this.props.componentName} Failed
					</h5>
					<pre style={{ fontSize: "12px", color: "#d32f2f" }}>
						{this.state.error?.message}
					</pre>
				</div>
			);
		}

		return (
			<div
				style={{
					border: "1px solid #ccc",
					padding: "10px",
					margin: "10px 0",
					backgroundColor: "#f5f5f5",
					color: "#333",
				}}
			>
				<h5 style={{ color: "green", margin: "0 0 8px 0" }}>
					✓ {this.props.componentName}
				</h5>
				<div style={{ color: "#333" }}>{this.props.children}</div>
			</div>
		);
	}
}

// Test Component wrapper
const TestComponent = ({ name, children }) => (
	<ComponentErrorBoundary componentName={name}>
		{children}
	</ComponentErrorBoundary>
);

export default function Edit({ attributes, setAttributes }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isPopoverVisible, setIsPopoverVisible] = useState(false);
	const [isGuideOpen, setIsGuideOpen] = useState(false);
	const { color } = attributes;

	const dummyOptions = [
		{ label: "Option 1", value: "1" },
		{ label: "Option 2", value: "2" },
	];

	return (
		<div {...useBlockProps()}>
			<div style={{ maxWidth: "800px", margin: "0 auto" }}>
				<h2>WordPress Components Test Suite</h2>
				<p>
					Each component is wrapped in an error boundary to isolate failures
				</p>

				{/* Basic Input Controls */}
				<h3>Basic Input Controls</h3>

				<TestComponent name="AnglePickerControl">
					<AnglePickerControl onChange={() => {}} value={0} />
				</TestComponent>

				<TestComponent name="BaseControl">
					<BaseControl id="test-base" label="Base Control">
						<input type="text" id="test-base" />
					</BaseControl>
				</TestComponent>

				<TestComponent name="InputControl">
					<InputControl value="" onChange={() => {}} />
				</TestComponent>

				<TestComponent name="SearchControl">
					<SearchControl value="" onChange={() => {}} />
				</TestComponent>

				<TestComponent name="TextareaControl">
					<TextareaControl value="" onChange={() => {}} />
				</TestComponent>

				{/* Button Variants */}
				<h3>Button Variants</h3>

				<TestComponent name="ButtonGroup">
					<ButtonGroup>
						<Button isPrimary>Button 1</Button>
						<Button isSecondary>Button 2</Button>
					</ButtonGroup>
				</TestComponent>

				<TestComponent name="ClipboardButton">
					<ClipboardButton text="Copy this text">
						Copy to Clipboard
					</ClipboardButton>
				</TestComponent>

				<TestComponent name="IconButton">
					<IconButton icon="admin-customizer">Icon Button</IconButton>
				</TestComponent>

				{/* Color Components */}
				<h3>Color Components</h3>

				<TestComponent name="ColorIndicator">
					<ColorIndicator colorValue="#f00" />
				</TestComponent>

				{/* Navigation Components */}
				<h3>Navigation Components</h3>

				<TestComponent name="NavigatorProvider">
					<NavigatorProvider>
						<NavigatorScreen path="/">
							<NavigatorButton path="/child">Go to Child</NavigatorButton>
						</NavigatorScreen>
						<NavigatorScreen path="/child">
							<NavigatorBackButton>Go Back</NavigatorBackButton>
						</NavigatorScreen>
					</NavigatorProvider>
				</TestComponent>

				{/* Menu Components */}
				<h3>Menu Components</h3>

				<TestComponent name="DropdownMenu">
					<DropdownMenu
						icon="menu"
						label="Select an option"
						controls={[
							{
								title: "Option 1",
								onClick: () => {},
							},
							{
								title: "Option 2",
								onClick: () => {},
							},
						]}
					/>
				</TestComponent>

				<TestComponent name="MenuGroup">
					<MenuGroup label="Group 1">
						<MenuItem onClick={() => {}}>Item 1</MenuItem>
						<MenuItem onClick={() => {}}>Item 2</MenuItem>
					</MenuGroup>
				</TestComponent>

				<TestComponent name="MenuItemsChoice">
					<MenuItemsChoice
						choices={[
							{ value: "1", label: "Choice 1" },
							{ value: "2", label: "Choice 2" },
						]}
						value="1"
						onSelect={() => {}}
					/>
				</TestComponent>

				{/* Visual Components */}
				<h3>Visual Components</h3>

				<TestComponent name="Animate">
					<Animate type="slide-in">
						<div>Animated Content</div>
					</Animate>
				</TestComponent>

				<TestComponent name="Dashicon">
					<Dashicon icon="admin-home" />
				</TestComponent>

				<TestComponent name="Icon">
					<Icon icon="wordpress" />
				</TestComponent>

				{/* Layout Components */}
				<h3>Layout Components</h3>

				<TestComponent name="Disabled">
					<Disabled>
						<Button>Disabled Button</Button>
					</Disabled>
				</TestComponent>

				<TestComponent name="FocalPointPicker">
					<FocalPointPicker
						url="https://picsum.photos/200/300"
						value={{ x: 0.5, y: 0.5 }}
						onChange={() => {}}
					/>
				</TestComponent>

				<TestComponent name="ResizableBox">
					<ResizableBox
						size={{ width: 200, height: 100 }}
						minWidth={100}
						minHeight={50}
					>
						<div>Resizable Content</div>
					</ResizableBox>
				</TestComponent>

				<TestComponent name="ResponsiveWrapper">
					<ResponsiveWrapper>
						<div style={{ width: 200, height: 100, background: "#eee" }}>
							Responsive Content
						</div>
					</ResponsiveWrapper>
				</TestComponent>

				{/* Form Components */}
				<h3>Form Components</h3>

				<TestComponent name="FormFileUpload">
					<FormFileUpload accept="image/*" onChange={() => {}}>
						Upload File
					</FormFileUpload>
				</TestComponent>

				<TestComponent name="FormToggle">
					<FormToggle checked={false} onChange={() => {}} />
				</TestComponent>

				{/* Specialized Components */}
				<h3>Specialized Components</h3>

				<TestComponent name="FontSizePicker">
					<FontSizePicker
						fontSizes={[
							{ name: "Small", slug: "small", size: 12 },
							{ name: "Normal", slug: "normal", size: 16 },
							{ name: "Large", slug: "large", size: 24 },
						]}
						value={16}
						onChange={() => {}}
					/>
				</TestComponent>

				<TestComponent name="Guide">
					<Button onClick={() => setIsGuideOpen(true)}>Open Guide</Button>
					{isGuideOpen && (
						<Guide
							onFinish={() => setIsGuideOpen(false)}
							pages={[
								{
									content: <GuidePage>Page 1 Content</GuidePage>,
								},
								{
									content: <GuidePage>Page 2 Content</GuidePage>,
								},
							]}
						/>
					)}
				</TestComponent>

				<TestComponent name="QueryControls">
					<QueryControls numberOfItems={10} onNumberOfItemsChange={() => {}} />
				</TestComponent>

				<TestComponent name="TreeSelect">
					<TreeSelect
						label="Tree Select"
						noOptionLabel="No option"
						onChange={() => {}}
						selectedId="1"
						tree={[
							{
								id: "1",
								name: "First",
								children: [
									{ id: "1-1", name: "Sub 1" },
									{ id: "1-2", name: "Sub 2" },
								],
							},
						]}
					/>
				</TestComponent>

				{/* Experimental Components */}
				<h3>Experimental Components</h3>

				<TestComponent name="Text">
					<Text>Sample Text Component</Text>
				</TestComponent>

				<TestComponent name="Heading">
					<Heading>Sample Heading Component</Heading>
				</TestComponent>

				<TestComponent name="HStack">
					<HStack>
						<div>Item 1</div>
						<div>Item 2</div>
					</HStack>
				</TestComponent>

				<TestComponent name="VStack">
					<VStack>
						<div>Item 1</div>
						<div>Item 2</div>
					</VStack>
				</TestComponent>

				<TestComponent name="Surface">
					<Surface>Surface Content</Surface>
				</TestComponent>

				<TestComponent name="Divider">
					<Divider />
				</TestComponent>

				{/* Utility Components */}
				<h3>Utility Components</h3>

				<TestComponent name="VisuallyHidden">
					<VisuallyHidden>
						This text is visually hidden but available to screen readers
					</VisuallyHidden>
				</TestComponent>

				<TestComponent name="KeyboardShortcuts">
					<KeyboardShortcuts
						shortcuts={{
							"ctrl+a": () => {},
							"ctrl+b": () => {},
						}}
					>
						<div>Press Ctrl+A or Ctrl+B</div>
					</KeyboardShortcuts>
				</TestComponent>

				{/* Interactive Components */}
				<h3>Interactive Components</h3>

				<TestComponent name="Draggable">
					<Draggable>
						{({ onDraggableStart, onDraggableEnd }) => (
							<div
								draggable
								onDragStart={onDraggableStart}
								onDragEnd={onDraggableEnd}
							>
								Drag me
							</div>
						)}
					</Draggable>
				</TestComponent>

				<TestComponent name="DropZone">
					<DropZone onFilesDrop={() => {}} onHTMLDrop={() => {}} />
				</TestComponent>

				<TestComponent name="Snackbar">
					<Snackbar>This is a snackbar message</Snackbar>
				</TestComponent>

				<TestComponent name="SnackbarList">
					<SnackbarList
						notices={[
							{
								id: "test",
								content: "Test notice",
								status: "success",
							},
						]}
					/>
				</TestComponent>

				{/* Keep existing components */}
				<TestComponent name="Button">
					<Button variant="primary">Test Button</Button>
				</TestComponent>

				<TestComponent name="ColorPicker">
					<ColorPicker color={color} onChange={() => {}} enableAlpha />
				</TestComponent>

				<TestComponent name="TextControl">
					<TextControl label="Text Control" value="" onChange={() => {}} />
				</TestComponent>

				<TestComponent name="SelectControl">
					<SelectControl
						label="Select Control"
						options={dummyOptions}
						onChange={() => {}}
					/>
				</TestComponent>

				<TestComponent name="CheckboxControl">
					<CheckboxControl
						label="Checkbox Control"
						checked={false}
						onChange={() => {}}
					/>
				</TestComponent>

				<TestComponent name="RadioControl">
					<RadioControl
						label="Radio Control"
						selected=""
						options={dummyOptions}
						onChange={() => {}}
					/>
				</TestComponent>

				<TestComponent name="RangeControl">
					<RangeControl
						label="Range Control"
						value={50}
						onChange={() => {}}
						min={0}
						max={100}
					/>
				</TestComponent>

				<TestComponent name="ToggleControl">
					<ToggleControl
						label="Toggle Control"
						checked={false}
						onChange={() => {}}
					/>
				</TestComponent>

				<TestComponent name="Card">
					<Card>
						<CardHeader>Header</CardHeader>
						<CardBody>Body</CardBody>
						<CardFooter>Footer</CardFooter>
					</Card>
				</TestComponent>

				<TestComponent name="Panel">
					<Panel>
						<PanelBody title="Panel Title">
							<PanelRow>Panel Content</PanelRow>
						</PanelBody>
					</Panel>
				</TestComponent>

				<TestComponent name="Notice">
					<Notice status="info" isDismissible={false}>
						This is a notice
					</Notice>
				</TestComponent>

				<TestComponent name="Spinner">
					<Spinner />
				</TestComponent>

				<TestComponent name="Modal">
					<Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
					{isModalOpen && (
						<Modal
							title="Test Modal"
							onRequestClose={() => setIsModalOpen(false)}
						>
							Modal Content
						</Modal>
					)}
				</TestComponent>

				<TestComponent name="Popover">
					<Button onClick={() => setIsPopoverVisible(!isPopoverVisible)}>
						Toggle Popover
					</Button>
					{isPopoverVisible && <Popover>Popover Content</Popover>}
				</TestComponent>

				<TestComponent name="TabPanel">
					<TabPanel
						tabs={[
							{ name: "tab1", title: "Tab 1" },
							{ name: "tab2", title: "Tab 2" },
						]}
					>
						{(tab) => <p>Content for {tab.title}</p>}
					</TabPanel>
				</TestComponent>

				<TestComponent name="Toolbar">
					<Toolbar>
						<ToolbarButton icon="editor-bold" label="Bold" />
						<ToolbarButton icon="editor-italic" label="Italic" />
					</Toolbar>
				</TestComponent>

				<TestComponent name="ComboboxControl">
					<ComboboxControl
						label="Combobox Control"
						options={dummyOptions}
						onChange={() => {}}
					/>
				</TestComponent>

				<TestComponent name="FormTokenField">
					<FormTokenField
						label="Token Field"
						value={[]}
						suggestions={["One", "Two", "Three"]}
						onChange={() => {}}
					/>
				</TestComponent>

				<TestComponent name="DateTimePicker">
					<DateTimePicker currentDate={new Date()} onChange={() => {}} />
				</TestComponent>

				<TestComponent name="ColorPalette">
					<ColorPalette
						colors={[
							{ name: "Red", color: "#f00" },
							{ name: "Blue", color: "#00f" },
						]}
						onChange={() => {}}
					/>
				</TestComponent>

				<TestComponent name="Flex and Grid">
					<Flex>
						<FlexBlock>Block 1</FlexBlock>
						<FlexItem>Item 2</FlexItem>
					</Flex>
					<Grid columns={2}>
						<View>Grid Item 1</View>
						<View>Grid Item 2</View>
					</Grid>
				</TestComponent>
			</div>
		</div>
	);
}

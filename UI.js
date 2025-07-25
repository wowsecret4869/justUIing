local library = {}

local charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
local function randomString(i)
	local v = ""
	for _ = 1, i do
		local randIndex = math.random(1, #charset)
		v = v .. charset:sub(randIndex, randIndex)
	end
	return v
end

local random = randomString(10)

if not game:GetService("RunService"):IsStudio() then
	for i, gui in pairs(game:GetService("CoreGui"):GetChildren()) do
		if gui:IsA("ScreenGui") and gui:GetAttribute("RipperUI") then
			gui:Destroy()
		end
	end
end

game:GetService("ContentProvider"):PreloadAsync({"rbxassetid://122504813117904"})
local ScreenGui = Instance.new("ScreenGui")
ScreenGui.Name = random
ScreenGui.IgnoreGuiInset = true
ScreenGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
ScreenGui:SetAttribute("RipperUI", true)
ScreenGui.Parent = game:GetService("RunService"):IsStudio() and game:GetService("Players").LocalPlayer.PlayerGui or game:GetService("CoreGui")

local U = game:GetService("UserInputService")
local Tw = game:GetService("TweenService")
local ColorUi = {87, 172, 139}

do
	function tw(info)
		return Tw:Create(info.v,TweenInfo.new(info.t, info.s, Enum.EasingDirection[info.d]),info.g)
	end
	function click(p)
		local Click = Instance.new("TextButton")

		Click.Name = "Click"
		Click.Parent = p
		Click.AnchorPoint = Vector2.new(0.5, 0.5)
		Click.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
		Click.BackgroundTransparency = 1
		Click.BorderColor3 = Color3.fromRGB(0, 0, 0)
		Click.BorderSizePixel = 0
		Click.Size = UDim2.new(1, 0, 1, 0)
		Click.Font = Enum.Font.SourceSans
		Click.Text = ""
		Click.TextColor3 = Color3.fromRGB(0, 0, 0)
		Click.TextSize = 14
		Click.Position = UDim2.new(0.5, 0, 0.5, 0)

		return Click
	end
	function changecanvas(ScrollingFrame, UIListLayout, Plus, Type)
		if Type then
			UIListLayout:GetPropertyChangedSignal("AbsoluteContentSize"):Connect(function()
				ScrollingFrame.CanvasSize = UDim2.new(0, UIListLayout.AbsoluteContentSize.X + Plus or 5, 0, 0)
			end)
		else
			UIListLayout:GetPropertyChangedSignal("AbsoluteContentSize"):Connect(function()
				ScrollingFrame.CanvasSize = UDim2.new(0, 0, 0, UIListLayout.AbsoluteContentSize.Y + Plus or 5)
			end)
		end
	end
	function lak(t, o)
		local a, b, c, d
		local function u(i)
			local dt = i.Position - c
			tw({v = o, t = 0.05, s = Enum.EasingStyle.Linear, d = "Out", g = {Position = UDim2.new(d.X.Scale, d.X.Offset + dt.X, d.Y.Scale, d.Y.Offset + dt.Y)}}):Play()
		end
		t.InputBegan:Connect(function(i) if i.UserInputType == Enum.UserInputType.MouseButton1 or i.UserInputType == Enum.UserInputType.Touch then a = true c = i.Position d = o.Position; i.Changed:Connect(function() if i.UserInputState == Enum.UserInputState.End then a = false end end) end end)
		t.InputChanged:Connect(function(i) if i.UserInputType == Enum.UserInputType.MouseMovement or i.UserInputType == Enum.UserInputType.Touch then b = i end end)
		U.InputChanged:Connect(function(i) if i == b and a then u(i) end end)
	end
	function gl(i)
		if type(i) == 'string' and not i:find('rbxassetid://') then
			return "rbxassetid://".. i
		elseif type(i) == 'number' then
			return "rbxassetid://".. i
		else
			return i
		end
	end
	function jc(c, p)
		local Mouse = game.Players.LocalPlayer:GetMouse()

		local relativeX = Mouse.X - c.AbsolutePosition.X
		local relativeY = Mouse.Y - c.AbsolutePosition.Y

		if relativeX < 0 or relativeY < 0 or relativeX > c.AbsoluteSize.X or relativeY > c.AbsoluteSize.Y then
			return
		end

		local ClickButtonCircle = Instance.new("Frame")
		ClickButtonCircle.Parent = p
		ClickButtonCircle.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
		ClickButtonCircle.BackgroundTransparency = 0.7
		ClickButtonCircle.BorderSizePixel = 0
		ClickButtonCircle.AnchorPoint = Vector2.new(0.5, 0.5)
		ClickButtonCircle.Position = UDim2.new(0, relativeX, 0, relativeY)
		ClickButtonCircle.Size = UDim2.new(0, 0, 0, 0)
		ClickButtonCircle.ZIndex = 10

		local UICorner = Instance.new("UICorner")
		UICorner.CornerRadius = UDim.new(1, 0)
		UICorner.Parent = ClickButtonCircle

		local tweenInfo = TweenInfo.new(1, Enum.EasingStyle.Quad, Enum.EasingDirection.Out)

		local goal = {
			Size = UDim2.new(0, c.AbsoluteSize.X * 1.5, 0, c.AbsoluteSize.X * 1.5),
			BackgroundTransparency = 1
		}

		local expandTween = Tw:Create(ClickButtonCircle, tweenInfo, goal)

		expandTween.Completed:Connect(function()
			ClickButtonCircle:Destroy()
		end)

		expandTween:Play()
	end
end

function library:Window(p)
	local Logo = p.Logo or 122504813117904
	local Keybind = p.Keybind or Enum.KeyCode.LeftControl
	local Size = p.Size or UDim2.new(0, 450,0.832, 0)
	
	local Shadow_1 = Instance.new("ImageLabel")
	local Background_1 = Instance.new("Frame")
	local UICorner_1 = Instance.new("UICorner")
	local UIPadding_10 = Instance.new("UIPadding")
	local Shadow_2 = Instance.new("ImageLabel")
	local Background_2 = Instance.new("Frame")
	local UIPadding_9 = Instance.new("UIPadding")
	local UICorner_2 = Instance.new("UICorner")
	local UIGradient_1 = Instance.new("UIGradient")
	local Top_1 = Instance.new("Frame")
	local Frame_1 = Instance.new("Frame")
	local UIPadding_1 = Instance.new("UIPadding")
	local Left_1 = Instance.new("ImageLabel")
	local Frame_2 = Instance.new("Frame")
	local Frame_3 = Instance.new("Frame")
	local ScrollingFrame_1 = Instance.new("ScrollingFrame")
	local UIListLayout_1 = Instance.new("UIListLayout")
	local UICorner_5 = Instance.new("UICorner")
	local UIPadding_2 = Instance.new("UIPadding")
	local UIPadding_3 = Instance.new("UIPadding")
	local Right_1 = Instance.new("ImageLabel")
	local ImageLabel_1 = Instance.new("ImageLabel")
	
	Shadow_1.Name = "Shadow"
	Shadow_1.Parent = ScreenGui
	Shadow_1.AnchorPoint = Vector2.new(0.5, 0.5)
	Shadow_1.BackgroundColor3 = Color3.fromRGB(255,255,255)
	Shadow_1.BackgroundTransparency = 1
	Shadow_1.BorderColor3 = Color3.fromRGB(0,0,0)
	Shadow_1.BorderSizePixel = 0
	Shadow_1.Position = UDim2.new(0.5, 0,0.5, 0)
	Shadow_1.Size = Size
	Shadow_1.Image = "rbxassetid://6015897843"
	Shadow_1.ImageColor3 = Color3.fromRGB(0,0,0)
	Shadow_1.ImageTransparency = 0.49
	Shadow_1.ScaleType = Enum.ScaleType.Slice
	Shadow_1.SliceCenter = Rect.new(47, 47, 450, 450)
	Shadow_1.ClipsDescendants = true
	
	lak(Background_1, Shadow_1)

	Background_1.Name = "Background"
	Background_1.Parent = Shadow_1
	Background_1.BackgroundColor3 = Color3.fromRGB(31,31,31)
	Background_1.BorderColor3 = Color3.fromRGB(0,0,0)
	Background_1.BorderSizePixel = 0
	Background_1.Size = UDim2.new(1, 0,1, 0)
	Background_1.ClipsDescendants = true

	UICorner_1.Parent = Background_1
	
	UIPadding_10.Parent = Shadow_1
	UIPadding_10.PaddingBottom = UDim.new(0,25)
	UIPadding_10.PaddingLeft = UDim.new(0,23)
	UIPadding_10.PaddingRight = UDim.new(0,23)
	UIPadding_10.PaddingTop = UDim.new(0,25)
	
	Shadow_2.Name = "Shadow"
	Shadow_2.Parent = Background_1
	Shadow_2.AnchorPoint = Vector2.new(0.5, 0.5)
	Shadow_2.BackgroundColor3 = Color3.fromRGB(255,255,255)
	Shadow_2.BackgroundTransparency = 1
	Shadow_2.BorderColor3 = Color3.fromRGB(0,0,0)
	Shadow_2.BorderSizePixel = 0
	Shadow_2.Position = UDim2.new(0.5, 0,0.5, 0)
	Shadow_2.Size = UDim2.new(1, 20,1, 20)
	Shadow_2.Image = "rbxassetid://6015897843"
	Shadow_2.ImageColor3 = Color3.fromRGB(0,0,0)
	Shadow_2.ImageTransparency = 0.8
	Shadow_2.ScaleType = Enum.ScaleType.Slice
	Shadow_2.SliceCenter = Rect.new(47, 47, 450, 450)
	
	Background_2.Name = "Background"
	Background_2.Parent = Shadow_2
	Background_2.BackgroundColor3 = Color3.fromRGB(33,33,33)
	Background_2.BorderColor3 = Color3.fromRGB(0,0,0)
	Background_2.BorderSizePixel = 0
	Background_2.Size = UDim2.new(1, 0,1, 0)
	
	UIPadding_9.Parent = Shadow_2
	UIPadding_9.PaddingBottom = UDim.new(0,25)
	UIPadding_9.PaddingLeft = UDim.new(0,23)
	UIPadding_9.PaddingRight = UDim.new(0,23)
	UIPadding_9.PaddingTop = UDim.new(0,25)
	
	UICorner_2.Parent = Background_2

	UIGradient_1.Parent = Background_2
	UIGradient_1.Rotation = 90
	UIGradient_1.Transparency = NumberSequence.new{NumberSequenceKeypoint.new(0,1), NumberSequenceKeypoint.new(1,0)}
	
	Top_1.Name = "Top"
	Top_1.Parent = Background_2
	Top_1.BackgroundColor3 = Color3.fromRGB(255,255,255)
	Top_1.BackgroundTransparency = 1
	Top_1.BorderColor3 = Color3.fromRGB(0,0,0)
	Top_1.BorderSizePixel = 0
	Top_1.Size = UDim2.new(1, 0,0, 40)

	Frame_1.Parent = Top_1
	Frame_1.BackgroundColor3 = Color3.fromRGB(255,255,255)
	Frame_1.BackgroundTransparency = 1
	Frame_1.BorderColor3 = Color3.fromRGB(0,0,0)
	Frame_1.BorderSizePixel = 0
	Frame_1.Size = UDim2.new(1, 0,1, 0)

	UIPadding_1.Parent = Frame_1
	UIPadding_1.PaddingBottom = UDim.new(0,3)
	UIPadding_1.PaddingLeft = UDim.new(0,40)
	UIPadding_1.PaddingTop = UDim.new(0,3)

	Left_1.Name = "Left"
	Left_1.Parent = Frame_1
	Left_1.AnchorPoint = Vector2.new(0, 0.5)
	Left_1.BackgroundColor3 = Color3.fromRGB(255,255,255)
	Left_1.BackgroundTransparency = 1
	Left_1.BorderColor3 = Color3.fromRGB(0,0,0)
	Left_1.BorderSizePixel = 0
	Left_1.Position = UDim2.new(0, 0,0.5, 0)
	Left_1.Size = UDim2.new(0, 20,0, 20)
	Left_1.Image = "rbxassetid://13858688108"

	Frame_2.Parent = Frame_1
	Frame_2.BackgroundColor3 = Color3.fromRGB(255,255,255)
	Frame_2.BackgroundTransparency = 1
	Frame_2.BorderColor3 = Color3.fromRGB(0,0,0)
	Frame_2.BorderSizePixel = 0
	Frame_2.Size = UDim2.new(1, 0,1, 0)

	Frame_3.Parent = Frame_2
	Frame_3.BackgroundColor3 = Color3.fromRGB(30,30,30)
	Frame_3.BorderColor3 = Color3.fromRGB(0,0,0)
	Frame_3.BorderSizePixel = 0
	Frame_3.Size = UDim2.new(1, 0,1, 0)

	ScrollingFrame_1.Name = "ScrollingFrame"
	ScrollingFrame_1.Parent = Frame_3
	ScrollingFrame_1.Active = true
	ScrollingFrame_1.BackgroundColor3 = Color3.fromRGB(255,255,255)
	ScrollingFrame_1.BackgroundTransparency = 1
	ScrollingFrame_1.BorderColor3 = Color3.fromRGB(0,0,0)
	ScrollingFrame_1.BorderSizePixel = 0
	ScrollingFrame_1.Size = UDim2.new(1, 0,1, 0)
	ScrollingFrame_1.ClipsDescendants = true
	ScrollingFrame_1.AutomaticCanvasSize = Enum.AutomaticSize.None
	ScrollingFrame_1.BottomImage = "rbxasset://textures/ui/Scroll/scroll-bottom.png"
	ScrollingFrame_1.CanvasPosition = Vector2.new(0, 0)
	ScrollingFrame_1.CanvasSize = UDim2.new(2, 0,0, 0)
	ScrollingFrame_1.ElasticBehavior = Enum.ElasticBehavior.WhenScrollable
	ScrollingFrame_1.HorizontalScrollBarInset = Enum.ScrollBarInset.None
	ScrollingFrame_1.MidImage = "rbxasset://textures/ui/Scroll/scroll-middle.png"
	ScrollingFrame_1.ScrollBarImageColor3 = Color3.fromRGB(0,0,0)
	ScrollingFrame_1.ScrollBarImageTransparency = 0
	ScrollingFrame_1.ScrollBarThickness = 0
	ScrollingFrame_1.ScrollingDirection = Enum.ScrollingDirection.XY
	ScrollingFrame_1.TopImage = "rbxasset://textures/ui/Scroll/scroll-top.png"
	ScrollingFrame_1.VerticalScrollBarInset = Enum.ScrollBarInset.None
	ScrollingFrame_1.VerticalScrollBarPosition = Enum.VerticalScrollBarPosition.Right

	UIListLayout_1.Parent = ScrollingFrame_1
	UIListLayout_1.Padding = UDim.new(0,5)
	UIListLayout_1.FillDirection = Enum.FillDirection.Horizontal
	UIListLayout_1.SortOrder = Enum.SortOrder.LayoutOrder
	UIListLayout_1.VerticalAlignment = Enum.VerticalAlignment.Center

	UICorner_5.Parent = Frame_3
	UICorner_5.CornerRadius = UDim.new(0,7)

	UIPadding_2.Parent = Frame_3
	UIPadding_2.PaddingBottom = UDim.new(0,5)
	UIPadding_2.PaddingLeft = UDim.new(0,5)
	UIPadding_2.PaddingRight = UDim.new(0,5)
	UIPadding_2.PaddingTop = UDim.new(0,5)

	UIPadding_3.Parent = Frame_2
	UIPadding_3.PaddingLeft = UDim.new(0,20)
	UIPadding_3.PaddingRight = UDim.new(0,20)

	Right_1.Name = "Right"
	Right_1.Parent = Frame_1
	Right_1.AnchorPoint = Vector2.new(1, 0.5)
	Right_1.BackgroundColor3 = Color3.fromRGB(255,255,255)
	Right_1.BackgroundTransparency = 1
	Right_1.BorderColor3 = Color3.fromRGB(0,0,0)
	Right_1.BorderSizePixel = 0
	Right_1.Position = UDim2.new(1, 0,0.5, 0)
	Right_1.Size = UDim2.new(0, 20,0, 20)
	Right_1.Image = "rbxassetid://13858691067"

	ImageLabel_1.Parent = Top_1
	ImageLabel_1.BackgroundColor3 = Color3.fromRGB(255,255,255)
	ImageLabel_1.BackgroundTransparency = 1
	ImageLabel_1.BorderColor3 = Color3.fromRGB(0,0,0)
	ImageLabel_1.BorderSizePixel = 0
	ImageLabel_1.Size = UDim2.new(0, 40,0, 40)
	ImageLabel_1.Image = gl(Logo)
	
	changecanvas(ScrollingFrame_1, UIListLayout_1, 5, true)
	
	local Page = Instance.new("Frame")
	local UIPadding_5 = Instance.new("UIPadding")
	local UIPageLayout_1 = Instance.new("UIPageLayout")
	
	Page.Name = "Page"
	Page.Parent = Background_2
	Page.BackgroundColor3 = Color3.fromRGB(255,255,255)
	Page.BackgroundTransparency = 1
	Page.BorderColor3 = Color3.fromRGB(0,0,0)
	Page.BorderSizePixel = 0
	Page.Size = UDim2.new(1, 0,1, 0)
	Page.ClipsDescendants = true
	
	UIPadding_5.Parent = Page
	UIPadding_5.PaddingTop = UDim.new(0,50)

	UIPageLayout_1.Parent = Page
	UIPageLayout_1.EasingStyle = Enum.EasingStyle.Exponential
    UIPageLayout_1.ScrollWheelInputEnabled = false
	UIPageLayout_1.TweenTime = .5
	
	local ClickLeft_1 = click(Left_1)
	local ClickRight_1 = click(Right_1)
	
	local Shadow = Instance.new("ImageLabel")
	local Background_1 = Instance.new("Frame")
	local UICorner_1 = Instance.new("UICorner")
	local ImageLabelClose_1 = Instance.new("TextLabel")
	local UIPadding_1 = Instance.new("UIPadding")

	Shadow.Name = "Shadow"
	Shadow.Parent = ScreenGui
	Shadow.BackgroundColor3 = Color3.fromRGB(255,255,255)
	Shadow.BackgroundTransparency = 1
	Shadow.BorderColor3 = Color3.fromRGB(0,0,0)
	Shadow.BorderSizePixel = 0
	Shadow.Size = UDim2.new(0, 95,0, 95)
	Shadow.Image = "rbxassetid://6015897843"
	Shadow.ImageColor3 = Color3.fromRGB(0,0,0)
	Shadow.ImageTransparency = 0.49
	Shadow.ScaleType = Enum.ScaleType.Slice
	Shadow.SliceCenter = Rect.new(47, 47, 450, 450)

	Background_1.Name = "Background"
	Background_1.Parent = Shadow
	Background_1.BackgroundColor3 = Color3.fromRGB(31,31,31)
	Background_1.BorderColor3 = Color3.fromRGB(0,0,0)
	Background_1.BorderSizePixel = 0
	Background_1.Size = UDim2.new(1, 0,1, 0)

	UICorner_1.Parent = Background_1

	ImageLabelClose_1.Parent = Background_1
	ImageLabelClose_1.BackgroundColor3 = Color3.fromRGB(255,255,255)
	ImageLabelClose_1.BackgroundTransparency = 1
	ImageLabelClose_1.BorderColor3 = Color3.fromRGB(0,0,0)
	ImageLabelClose_1.BorderSizePixel = 0
	ImageLabelClose_1.Size = UDim2.new(1, 0,1, 0)
	ImageLabelClose_1.Text = 'OFF'
	ImageLabelClose_1.Font = Enum.Font.GothamBold
	ImageLabelClose_1.TextColor3 = Color3.fromRGB(255, 255, 255)
	ImageLabelClose_1.TextSize = 16

	UIPadding_1.Parent = Shadow
	UIPadding_1.PaddingBottom = UDim.new(0,25)
	UIPadding_1.PaddingLeft = UDim.new(0,23)
	UIPadding_1.PaddingRight = UDim.new(0,23)
	UIPadding_1.PaddingTop = UDim.new(0,25)
	
	local Click = click(Background_1)
	local isvaui = false
	lak(Click, Shadow)
	local function close()
		ImageLabelClose_1.Text = 'ON'
		tw({v = Page, t = .5, s = Enum.EasingStyle.Exponential, d = "Out", g = {Position = UDim2.new(0, 0, 1, 0)}}):Play()
		tw({v = Frame_1, t = .5, s = Enum.EasingStyle.Exponential, d = "Out", g = {Position = UDim2.new(1, 0, 0, 0)}}):Play()
		tw({v = ImageLabel_1, t = .5, s = Enum.EasingStyle.Exponential, d = "Out", g = {AnchorPoint = Vector2.new(1, 0)}}):Play()	
		task.delay(.15, function()
			tw({v = Shadow_1, t = 1, s = Enum.EasingStyle.Exponential, d = "Out", g = {Size = UDim2.new(0, 0,0, 0)}}):Play()
		end)
	end
	local function open()
		ImageLabelClose_1.Text = 'OFF'
		tw({v = Shadow_1, t = 1, s = Enum.EasingStyle.Exponential, d = "Out", g = {Size = UDim2.new(0, 450,0.4, 0)}}):Play()	
		task.delay(.15, function()
			tw({v = Page, t = .5, s = Enum.EasingStyle.Exponential, d = "Out", g = {Position = UDim2.new(0, 0, 0, 0)}}):Play()
			tw({v = Frame_1, t = .5, s = Enum.EasingStyle.Exponential, d = "Out", g = {Position = UDim2.new(0, 0, 0, 0)}}):Play()	
			tw({v = ImageLabel_1, t = .5, s = Enum.EasingStyle.Exponential, d = "Out", g = {AnchorPoint = Vector2.new(0, 0)}}):Play()
		end)
	end
	local function cll()
		if isvaui then
			open()
		else
			close()
		end
		isvaui = not isvaui
	end
	
	Click.MouseButton1Click:Connect(cll)
	U.InputBegan:Connect(function(i)
		if i.KeyCode == Keybind then
			local focusedTextBox = U:GetFocusedTextBox()
			if not focusedTextBox then
				cll()
			end
		end
	end)
	
	local window = {}
	local Tabs = {}
	local isva = false
	
	function window:Tab(p)
		local Tab = Instance.new("Frame",ScrollingFrame_1)
		local UICorner_1 = Instance.new("UICorner",Tab)
		local Frame_1 = Instance.new("Frame",Tab)
		local UIPadding_1 = Instance.new("UIPadding",Frame_1)
		local TextLabel_1 = Instance.new("TextLabel",Frame_1)

		Tab.Name = "Tab"
		Tab.AutomaticSize = Enum.AutomaticSize.X
		Tab.BackgroundColor3 = Color3.fromRGB(66, 66, 66)
		Tab.BorderColor3 = Color3.fromRGB(0,0,0)
		Tab.BorderSizePixel = 0
		Tab.Size = UDim2.new(0, 0,1, 0)

		UICorner_1.CornerRadius = UDim.new(0,5)

		Frame_1.BackgroundColor3 = Color3.fromRGB(255,255,255)
		Frame_1.BackgroundTransparency = 1
		Frame_1.BorderColor3 = Color3.fromRGB(0,0,0)
		Frame_1.BorderSizePixel = 0
		Frame_1.Size = UDim2.new(1, 0,1, 0)

		UIPadding_1.PaddingLeft = UDim.new(0,10)
		UIPadding_1.PaddingRight = UDim.new(0,10)

		TextLabel_1.AutomaticSize = Enum.AutomaticSize.X
		TextLabel_1.BackgroundColor3 = Color3.fromRGB(255,255,255)
		TextLabel_1.BackgroundTransparency = 1
		TextLabel_1.BorderColor3 = Color3.fromRGB(0,0,0)
		TextLabel_1.BorderSizePixel = 0
		TextLabel_1.Size = UDim2.new(0, 0,1, 0)
		TextLabel_1.Font = Enum.Font.GothamBold
		TextLabel_1.Text = p.Title
		TextLabel_1.TextColor3 = Color3.fromRGB(255,255,255)
		TextLabel_1.TextSize = 12
		
		local In_1 = Instance.new("Frame",Page)
		local Left_1 = Instance.new("ScrollingFrame",In_1)
		local UIListLayoutLeft_1 = Instance.new('UIListLayout',Left_1)
		local Right_1 = Instance.new("ScrollingFrame",In_1)
		local UIListLayoutRight_1 = Instance.new('UIListLayout',Right_1)
		
		In_1.Name = "In"
		In_1.BackgroundColor3 = Color3.fromRGB(255,255,255)
		In_1.BackgroundTransparency = 1
		In_1.BorderColor3 = Color3.fromRGB(0,0,0)
		In_1.BorderSizePixel = 0
		In_1.Size = UDim2.new(1, 0,1, 0)
		
		Left_1.Name = "Left"
		Left_1.Active = true
		Left_1.BackgroundColor3 = Color3.fromRGB(255,255,255)
		Left_1.BackgroundTransparency = 1
		Left_1.BorderColor3 = Color3.fromRGB(0,0,0)
		Left_1.BorderSizePixel = 0
		Left_1.Size = UDim2.new(0.495, 0,1, 0)
		Left_1.ClipsDescendants = true
		Left_1.AutomaticCanvasSize = Enum.AutomaticSize.None
		Left_1.BottomImage = "rbxasset://textures/ui/Scroll/scroll-bottom.png"
		Left_1.CanvasPosition = Vector2.new(0, 0)
		Left_1.ElasticBehavior = Enum.ElasticBehavior.WhenScrollable
		Left_1.HorizontalScrollBarInset = Enum.ScrollBarInset.None
		Left_1.MidImage = "rbxasset://textures/ui/Scroll/scroll-middle.png"
		Left_1.ScrollBarImageColor3 = Color3.fromRGB(0,0,0)
		Left_1.ScrollBarImageTransparency = 0
		Left_1.ScrollBarThickness = 0
		Left_1.ScrollingDirection = Enum.ScrollingDirection.XY
		Left_1.TopImage = "rbxasset://textures/ui/Scroll/scroll-top.png"
		Left_1.VerticalScrollBarInset = Enum.ScrollBarInset.None
		Left_1.VerticalScrollBarPosition = Enum.VerticalScrollBarPosition.Right
		
        UIListLayoutLeft_1.Name = "UIListLayoutLeft"
		UIListLayoutLeft_1.Padding = UDim.new(0,8)
		UIListLayoutLeft_1.SortOrder = Enum.SortOrder.LayoutOrder
		
		Right_1.Name = "Right"
		Right_1.Active = true
		Right_1.AnchorPoint = Vector2.new(1, 0)
		Right_1.BackgroundColor3 = Color3.fromRGB(255,255,255)
		Right_1.BackgroundTransparency = 1
		Right_1.BorderColor3 = Color3.fromRGB(0,0,0)
		Right_1.BorderSizePixel = 0
		Right_1.Position = UDim2.new(1, 0,0, 0)
		Right_1.Size = UDim2.new(0.495, 0,1, 0)
		Right_1.ClipsDescendants = true
		Right_1.AutomaticCanvasSize = Enum.AutomaticSize.None
		Right_1.BottomImage = "rbxasset://textures/ui/Scroll/scroll-bottom.png"
		Right_1.CanvasPosition = Vector2.new(0, 0)
		Right_1.ElasticBehavior = Enum.ElasticBehavior.WhenScrollable
		Right_1.HorizontalScrollBarInset = Enum.ScrollBarInset.None
		Right_1.MidImage = "rbxasset://textures/ui/Scroll/scroll-middle.png"
		Right_1.ScrollBarImageColor3 = Color3.fromRGB(0,0,0)
		Right_1.ScrollBarImageTransparency = 0
		Right_1.ScrollBarThickness = 0
		Right_1.ScrollingDirection = Enum.ScrollingDirection.XY
		Right_1.TopImage = "rbxasset://textures/ui/Scroll/scroll-top.png"
		Right_1.VerticalScrollBarInset = Enum.ScrollBarInset.None
		Right_1.VerticalScrollBarPosition = Enum.VerticalScrollBarPosition.Right

		UIListLayoutRight_1.Padding = UDim.new(0,8)
		UIListLayoutRight_1.SortOrder = Enum.SortOrder.LayoutOrder
		
		changecanvas(Left_1, UIListLayoutLeft_1, 5)
		changecanvas(Right_1, UIListLayoutRight_1, 5)
		
		Tabs[In_1] = Tab
		
		local Click = click(Tab)
		local function cll()
			for i, v in pairs(ScrollingFrame_1:GetChildren()) do
				if v:IsA('Frame') then
					tw({v = v, t = .5, s = Enum.EasingStyle.Exponential, d = "Out", g = {BackgroundColor3 = Color3.fromRGB(66, 66, 66)}}):Play()
				end
			end
			tw({v = Tab, t = .5, s = Enum.EasingStyle.Exponential, d = "Out", g = {BackgroundColor3 = Color3.fromRGB(unpack(ColorUi))}}):Play()
			UIPageLayout_1:JumpTo(In_1)
		end
		
		Click.MouseButton1Click:Connect(cll)
	    task.spawn(function()
			if not isva then
				cll()
				isva = true
			end
		end)
		
		local function clfl()
			local tab = Tabs[UIPageLayout_1.CurrentPage]
			if tab then
				for i, v in pairs(ScrollingFrame_1:GetChildren()) do
					if v:IsA('Frame') then
						tw({v = v, t = .5, s = Enum.EasingStyle.Exponential, d = "Out", g = {BackgroundColor3 = Color3.fromRGB(66, 66, 66)}}):Play()
					end
				end
				tw({v = tab, t = .5, s = Enum.EasingStyle.Exponential, d = "Out", g = {BackgroundColor3 = Color3.fromRGB(unpack(ColorUi))}}):Play()
			end
		end

		ClickLeft_1.MouseButton1Click:Connect(function()
			UIPageLayout_1:Previous()
			clfl()
		end)

		ClickRight_1.MouseButton1Click:Connect(function()
			UIPageLayout_1:Next()
            clfl()
		end)
		
		local function getside(s)
			if string.lower(s) == "right" then
				return Right_1
			else
				return Left_1
			end
		end
		
		local tab = {}
		
		function tab:Section(p)
			local Section_Frame = Instance.new("Frame", getside(p.Side or 'Left'))
			local Section_UICorner = Instance.new("UICorner", Section_Frame)
			local Section_FuncFrame = Instance.new("Frame", Section_Frame)
			local Section_UIListLayout = Instance.new("UIListLayout", Section_FuncFrame)
			local Section_UIPadding = Instance.new("UIPadding", Section_FuncFrame)
			local Section_TextFrame = Instance.new("Frame", Section_FuncFrame)
			local Section_TextLabel = Instance.new("TextLabel", Section_TextFrame)
			local Section_TextPadding = Instance.new("UIPadding", Section_TextFrame)
			local Section_Line = Instance.new("Frame", Section_Frame)

			Section_Frame.Name = "Section"
			Section_Frame.AutomaticSize = Enum.AutomaticSize.Y
			Section_Frame.BackgroundColor3 = Color3.fromRGB(23,23,23)
			Section_Frame.BorderColor3 = Color3.fromRGB(0,0,0)
			Section_Frame.BorderSizePixel = 0
			Section_Frame.Size = UDim2.new(1, 0,0, 0)

			Section_FuncFrame.Name = "Func"
			Section_FuncFrame.BackgroundColor3 = Color3.fromRGB(255,255,255)
			Section_FuncFrame.BackgroundTransparency = 1
			Section_FuncFrame.BorderColor3 = Color3.fromRGB(0,0,0)
			Section_FuncFrame.BorderSizePixel = 0
			Section_FuncFrame.Size = UDim2.new(1, 0,1, 0)

			Section_UIListLayout.Padding = UDim.new(0,5)
			Section_UIListLayout.SortOrder = Enum.SortOrder.LayoutOrder

			Section_UIPadding.PaddingBottom = UDim.new(0,5)
			Section_UIPadding.PaddingLeft = UDim.new(0,3)
			Section_UIPadding.PaddingRight = UDim.new(0,3)
			Section_UIPadding.PaddingTop = UDim.new(0,5)

			Section_TextFrame.Name = "SectionText"
			Section_TextFrame.BackgroundColor3 = Color3.fromRGB(255,255,255)
			Section_TextFrame.BackgroundTransparency = 1
			Section_TextFrame.BorderColor3 = Color3.fromRGB(0,0,0)
			Section_TextFrame.BorderSizePixel = 0
			Section_TextFrame.LayoutOrder = -1
			Section_TextFrame.Size = UDim2.new(1, 0,0, 18)

			Section_TextLabel.Name = "txt"
			Section_TextLabel.BackgroundColor3 = Color3.fromRGB(255,255,255)
			Section_TextLabel.BackgroundTransparency = 1
			Section_TextLabel.BorderColor3 = Color3.fromRGB(0,0,0)
			Section_TextLabel.BorderSizePixel = 0
			Section_TextLabel.LayoutOrder = -1
			Section_TextLabel.Size = UDim2.new(1, 0,1, 0)
			Section_TextLabel.Font = Enum.Font.GothamBold
			Section_TextLabel.Text = p.Title
			Section_TextLabel.TextColor3 = Color3.fromRGB(255,255,255)
			Section_TextLabel.TextSize = 10
			Section_TextLabel.TextTransparency = 0.5
			Section_TextLabel.TextXAlignment = Enum.TextXAlignment.Left

			Section_TextPadding.PaddingLeft = UDim.new(0,4)

			Section_Line.Name = "Line"
			Section_Line.BackgroundColor3 = Color3.fromRGB(unpack(ColorUi))
			Section_Line.BorderColor3 = Color3.fromRGB(0,0,0)
			Section_Line.BorderSizePixel = 0
			Section_Line.Size = UDim2.new(1, 0,0, 2)

			local section = {}
			
			function section:Toggle(p)
				local Title = p.Title
				local Value = p.Value or false
				local Callback = p.Callback or function() end
				
				local Toggle_Frame = Instance.new("Frame", Section_FuncFrame)
				local Toggle_UICorner = Instance.new("UICorner", Toggle_Frame)
				local Toggle_ContainerFrame = Instance.new("Frame", Toggle_Frame)
				local Toggle_UIListLayout = Instance.new("UIListLayout", Toggle_ContainerFrame)
				local Toggle_UIPadding = Instance.new("UIPadding", Toggle_ContainerFrame)
				local Toggle_InnerFrame = Instance.new("Frame", Toggle_ContainerFrame)
				local Toggle_CheckFrame = Instance.new("Frame", Toggle_InnerFrame)
				local Toggle_CheckUICorner = Instance.new("UICorner", Toggle_CheckFrame)
				local Toggle_CheckImage = Instance.new("ImageLabel", Toggle_CheckFrame)
				local Toggle_ImageUICorner = Instance.new("UICorner", Toggle_CheckImage)
				local Toggle_InnerUICorner = Instance.new("UICorner", Toggle_InnerFrame)
				local Toggle_TextFrame = Instance.new("Frame", Toggle_Frame)
				local Toggle_TextPadding = Instance.new("UIPadding", Toggle_TextFrame)
				local Toggle_TextLabel = Instance.new("TextLabel", Toggle_TextFrame)

				Toggle_Frame.Name = "Toggle"
				Toggle_Frame.BackgroundColor3 = Color3.fromRGB(88,88,88)
				Toggle_Frame.BackgroundTransparency = 0.8999999761581421
				Toggle_Frame.BorderColor3 = Color3.fromRGB(0,0,0)
				Toggle_Frame.BorderSizePixel = 0
				Toggle_Frame.Size = UDim2.new(1, 0,0, 30)
				Toggle_Frame.ClipsDescendants = true

				Toggle_UICorner.CornerRadius = UDim.new(0,6)

				Toggle_ContainerFrame.AnchorPoint = Vector2.new(1, 0.5)
				Toggle_ContainerFrame.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Toggle_ContainerFrame.BackgroundTransparency = 1
				Toggle_ContainerFrame.BorderColor3 = Color3.fromRGB(0,0,0)
				Toggle_ContainerFrame.BorderSizePixel = 0
				Toggle_ContainerFrame.Position = UDim2.new(1, 0,0.5, 0)
				Toggle_ContainerFrame.Size = UDim2.new(0, 100,0.8, 0)

				Toggle_UIListLayout.HorizontalAlignment = Enum.HorizontalAlignment.Right
				Toggle_UIListLayout.SortOrder = Enum.SortOrder.LayoutOrder
				Toggle_UIListLayout.VerticalAlignment = Enum.VerticalAlignment.Center

				Toggle_UIPadding.PaddingRight = UDim.new(0,10)

				Toggle_InnerFrame.BackgroundColor3 = Color3.fromRGB(23, 23, 23)
				Toggle_InnerFrame.BorderColor3 = Color3.fromRGB(0,0,0)
				Toggle_InnerFrame.BorderSizePixel = 0
				Toggle_InnerFrame.Size = UDim2.new(0, 15,0, 15)

				Toggle_CheckFrame.BackgroundColor3 = Color3.fromRGB(unpack(ColorUi))
				Toggle_CheckFrame.BorderColor3 = Color3.fromRGB(0,0,0)
				Toggle_CheckFrame.BorderSizePixel = 0
				Toggle_CheckFrame.Size = UDim2.new(1, 0,1, 0)
				Toggle_CheckFrame.AnchorPoint = Vector2.new(0.5, 0.5)
				Toggle_CheckFrame.Position = UDim2.new(0.5, 0, 0.5, 0)

				Toggle_CheckUICorner.CornerRadius = UDim.new(0,4)

				Toggle_CheckImage.Name = "done"
				Toggle_CheckImage.AnchorPoint = Vector2.new(0.5, 0.5)
				Toggle_CheckImage.BackgroundColor3 = Color3.fromRGB(27,27,27)
				Toggle_CheckImage.BackgroundTransparency = 1
				Toggle_CheckImage.BorderColor3 = Color3.fromRGB(27,27,27)
				Toggle_CheckImage.Position = UDim2.new(0.5, 0,0.5, 0)
				Toggle_CheckImage.Size = UDim2.new(0.8, 0,0.8, 0)
				Toggle_CheckImage.Image = "rbxassetid://3926305904"
				Toggle_CheckImage.ImageColor3 = Color3.fromRGB(27,27,27)
				Toggle_CheckImage.ImageRectOffset = Vector2.new(644, 204)
				Toggle_CheckImage.ImageRectSize = Vector2.new(36, 36)

				Toggle_ImageUICorner.CornerRadius = UDim.new(0,4)

				Toggle_InnerUICorner.CornerRadius = UDim.new(0,4)

				Toggle_TextFrame.AnchorPoint = Vector2.new(0, 0.5)
				Toggle_TextFrame.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Toggle_TextFrame.BackgroundTransparency = 1
				Toggle_TextFrame.BorderColor3 = Color3.fromRGB(0,0,0)
				Toggle_TextFrame.BorderSizePixel = 0
				Toggle_TextFrame.Position = UDim2.new(0, 0,0.5, 0)
				Toggle_TextFrame.Size = UDim2.new(0.8, 0,0.8, 0)

				Toggle_TextPadding.PaddingLeft = UDim.new(0,10)

				Toggle_TextLabel.AnchorPoint = Vector2.new(0, 0.5)
				Toggle_TextLabel.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Toggle_TextLabel.BackgroundTransparency = 1
				Toggle_TextLabel.BorderColor3 = Color3.fromRGB(0,0,0)
				Toggle_TextLabel.BorderSizePixel = 0
				Toggle_TextLabel.Position = UDim2.new(0, 0,0.5, 0)
				Toggle_TextLabel.Size = UDim2.new(1, 0,0, 16)
				Toggle_TextLabel.Font = Enum.Font.GothamBold
				Toggle_TextLabel.RichText = true
				Toggle_TextLabel.Text = Title
				Toggle_TextLabel.TextColor3 = Color3.fromRGB(255,255,255)
				Toggle_TextLabel.TextSize = 11
				Toggle_TextLabel.TextWrapped = true
				Toggle_TextLabel.TextXAlignment = Enum.TextXAlignment.Left
				
				local Click = click(Toggle_Frame)
				
				local function ToggleC(Value)
					if not Value then
						tw({v = Toggle_TextLabel, t = 0.15, s = Enum.EasingStyle.Linear, d = "InOut", g = {TextTransparency = 0.4}}):Play()
						tw({v = Toggle_CheckFrame, t = 0.15, s = Enum.EasingStyle.Back, d = "In", g = {Size = UDim2.new(0, 0, 0, 0)}}):Play()
						pcall(function() Callback(Value) end)
					elseif Value then
						tw({v = Toggle_TextLabel, t = 0.15, s = Enum.EasingStyle.Linear, d = "InOut", g = {TextTransparency = 0}}):Play()
						tw({v = Toggle_CheckFrame, t = 0.15, s = Enum.EasingStyle.Back, d = "Out", g = {Size = UDim2.new(1, 0, 1, 0)}}):Play()
						pcall(function() Callback(Value) end)
					end
				end

				task.delay(0.5, function()
					ToggleC(Value)
				end)
				Click.MouseButton1Click:Connect(function()
					Value = not Value
					jc(Click, Toggle_Frame)
					ToggleC(Value)
				end)
				
				local Set = {}
				
				function Set:SetTitle(txt)
					Toggle_TextLabel.Text = txt
				end
				
				function Set:SetValue(va)
					ToggleC(va)
				end
				
				return Set
			end
			
			function section:Slider(p)
				local Title = p.Title or 'slider'
				local Min = p.Min or 0
				local Max = p.Max or 100
				local Value = p.Value or Max / 1
				local Rounding = p.Rounding or 2
				local Callback = p.Callback or function() end
				
				local Slider_Frame = Instance.new("Frame", Section_FuncFrame)
				local Slider_UICorner = Instance.new("UICorner", Slider_Frame)
				local Slider_ContainerFrame = Instance.new("Frame", Slider_Frame)
				local Slider_UIListLayout = Instance.new("UIListLayout", Slider_ContainerFrame)
				local Slider_UIPadding = Instance.new("UIPadding", Slider_ContainerFrame)
				local Slider_Bar = Instance.new("Frame", Slider_ContainerFrame)
				local Slider_BarValue = Instance.new("Frame", Slider_Bar)
				local Slider_ValueUICorner = Instance.new("UICorner", Slider_BarValue)
				local Slider_Knob = Instance.new("Frame", Slider_BarValue)
				local Slider_KnobUICorner = Instance.new("UICorner", Slider_Knob)
				local Slider_ValuePadding = Instance.new("UIPadding", Slider_BarValue)
				local Slider_BarUICorner = Instance.new("UICorner", Slider_Bar)
				local Slider_TextFrame = Instance.new("Frame", Slider_Frame)
				local Slider_TextPadding = Instance.new("UIPadding", Slider_TextFrame)
				local Slider_TextLabel = Instance.new("TextLabel", Slider_TextFrame)
				local Slider_ValueFrame = Instance.new("Frame", Slider_Frame)
				local Slider_ValuePadding = Instance.new("UIPadding", Slider_ValueFrame)
				local Slider_ValueContainer = Instance.new("Frame", Slider_ValueFrame)
				local Slider_ValueTextBox = Instance.new("TextBox", Slider_ValueContainer)
				local Slider_ValueContainerUICorner = Instance.new("UICorner", Slider_ValueContainer)

				Slider_Frame.Name = "Slider"
				Slider_Frame.BackgroundColor3 = Color3.fromRGB(88,88,88)
				Slider_Frame.BackgroundTransparency = 0.8999999761581421
				Slider_Frame.BorderColor3 = Color3.fromRGB(0,0,0)
				Slider_Frame.BorderSizePixel = 0
				Slider_Frame.Size = UDim2.new(1, 0,0, 45)
				Slider_Frame.ClipsDescendants = true

				Slider_UICorner.CornerRadius = UDim.new(0,6)

				Slider_ContainerFrame.AnchorPoint = Vector2.new(0, 1)
				Slider_ContainerFrame.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Slider_ContainerFrame.BackgroundTransparency = 1
				Slider_ContainerFrame.BorderColor3 = Color3.fromRGB(0,0,0)
				Slider_ContainerFrame.BorderSizePixel = 0
				Slider_ContainerFrame.Position = UDim2.new(0, 0,1, 0)
				Slider_ContainerFrame.Size = UDim2.new(1, 0,0, 30)

				Slider_UIListLayout.HorizontalAlignment = Enum.HorizontalAlignment.Right
				Slider_UIListLayout.SortOrder = Enum.SortOrder.LayoutOrder
				Slider_UIListLayout.VerticalAlignment = Enum.VerticalAlignment.Center

				Slider_UIPadding.PaddingLeft = UDim.new(0,8)
				Slider_UIPadding.PaddingRight = UDim.new(0,8)

				Slider_Bar.Name = "SliderBar"
				Slider_Bar.BackgroundColor3 = Color3.fromRGB(23, 23, 23)
				Slider_Bar.BorderColor3 = Color3.fromRGB(0,0,0)
				Slider_Bar.BorderSizePixel = 0
				Slider_Bar.Size = UDim2.new(1, 0,0, 5)

				Slider_BarValue.Name = "SliderBarValue"
				Slider_BarValue.BackgroundColor3 = Color3.fromRGB(unpack(ColorUi))
				Slider_BarValue.BorderColor3 = Color3.fromRGB(0,0,0)
				Slider_BarValue.BorderSizePixel = 0
				Slider_BarValue.Size = UDim2.new(0.8, 0,1, 0)

				Slider_ValueUICorner.CornerRadius = UDim.new(0,4)

				Slider_Knob.AnchorPoint = Vector2.new(1, 0.5)
				Slider_Knob.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Slider_Knob.BorderColor3 = Color3.fromRGB(0,0,0)
				Slider_Knob.BorderSizePixel = 0
				Slider_Knob.Position = UDim2.new(1, 0,0.5, 0)
				Slider_Knob.Size = UDim2.new(0, 10,0, 10)

				Slider_KnobUICorner.CornerRadius = UDim.new(1,0)

				Slider_ValuePadding.PaddingLeft = UDim.new(0,10)

				Slider_BarUICorner.CornerRadius = UDim.new(0,4)

				Slider_TextFrame.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Slider_TextFrame.BackgroundTransparency = 1
				Slider_TextFrame.BorderColor3 = Color3.fromRGB(0,0,0)
				Slider_TextFrame.BorderSizePixel = 0
				Slider_TextFrame.Size = UDim2.new(0.8, 0,0, 25)

				Slider_TextPadding.PaddingLeft = UDim.new(0,10)

				Slider_TextLabel.AnchorPoint = Vector2.new(0, 0.5)
				Slider_TextLabel.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Slider_TextLabel.BackgroundTransparency = 1
				Slider_TextLabel.BorderColor3 = Color3.fromRGB(0,0,0)
				Slider_TextLabel.BorderSizePixel = 0
				Slider_TextLabel.Position = UDim2.new(0, 0,0.5, 0)
				Slider_TextLabel.Size = UDim2.new(1, 0,0, 16)
				Slider_TextLabel.Font = Enum.Font.GothamBold
				Slider_TextLabel.RichText = true
				Slider_TextLabel.Text = Title
				Slider_TextLabel.TextColor3 = Color3.fromRGB(255,255,255)
				Slider_TextLabel.TextSize = 11
				Slider_TextLabel.TextWrapped = true
				Slider_TextLabel.TextXAlignment = Enum.TextXAlignment.Left

				Slider_ValueFrame.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Slider_ValueFrame.BackgroundTransparency = 1
				Slider_ValueFrame.BorderColor3 = Color3.fromRGB(0,0,0)
				Slider_ValueFrame.BorderSizePixel = 0
				Slider_ValueFrame.Size = UDim2.new(1, 0,0, 25)

				Slider_ValuePadding.PaddingRight = UDim.new(0,10)

				Slider_ValueContainer.AnchorPoint = Vector2.new(1, 0.5)
				Slider_ValueContainer.BackgroundColor3 = Color3.fromRGB(23, 23, 23)
				Slider_ValueContainer.BorderColor3 = Color3.fromRGB(0,0,0)
				Slider_ValueContainer.BorderSizePixel = 0
				Slider_ValueContainer.Position = UDim2.new(1, 0,0.5, 0)
				Slider_ValueContainer.Size = UDim2.new(0, 50,0, 16)

				Slider_ValueTextBox.Name = "TextLabel"
				Slider_ValueTextBox.AnchorPoint = Vector2.new(1, 0.5)
				Slider_ValueTextBox.AutomaticSize = Enum.AutomaticSize.X
				Slider_ValueTextBox.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Slider_ValueTextBox.BackgroundTransparency = 1
				Slider_ValueTextBox.BorderColor3 = Color3.fromRGB(0,0,0)
				Slider_ValueTextBox.BorderSizePixel = 0
				Slider_ValueTextBox.Position = UDim2.new(1, 0,0.5, 0)
				Slider_ValueTextBox.Size = UDim2.new(1, 0,1, 0)
				Slider_ValueTextBox.Font = Enum.Font.GothamBold
				Slider_ValueTextBox.PlaceholderColor3 = Color3.fromRGB(178,178,178)
				Slider_ValueTextBox.PlaceholderText = ""
				Slider_ValueTextBox.RichText = true
				Slider_ValueTextBox.Text = Value
				Slider_ValueTextBox.TextColor3 = Color3.fromRGB(255,255,255)
				Slider_ValueTextBox.TextSize = 10
				Slider_ValueTextBox.TextTransparency = 0.5
				Slider_ValueTextBox.TextWrapped = true

				Slider_ValueContainerUICorner.CornerRadius = UDim.new(0,4)
				
				local Set = {}
				local Slider_Click = click(Slider_Bar)
				Slider_Click.Size = UDim2.new(1, 0, 1, 30)

				local function roundToDecimal(v, d)
					return math.floor(v * 10 ^ d + 0.5) / 10 ^ d
				end

				local function updateSlider(value)
					value = math.clamp(value, Min, Max)
					value = roundToDecimal(value, Rounding)
					Value = value
					local va = (value - Min) / (Max - Min)
					tw({v = Slider_BarValue, t = 0.5, s = Enum.EasingStyle.Exponential, d = "Out", g = {Size = UDim2.new(math.clamp(va, 0, 1), 0, 1, 0)}}):Play()
					tw({v = Slider_ValueContainer, t = 0.5, s = Enum.EasingStyle.Exponential, d = "Out", g = {Size = UDim2.new(0, Slider_ValueTextBox.TextBounds.X + 15, 0, 1)}}):Play()
					Slider_ValueTextBox.Text = tostring(roundToDecimal(value, Rounding))
					pcall(Callback, value)
				end

				updateSlider(Value or 0)

				Slider_ValueTextBox.FocusLost:Connect(function()
					local value = tonumber(Slider_ValueTextBox.Text) or Min
					updateSlider(value)
				end)

				local function move(input)
					local sliderBar = Slider_Bar
					local relativeX = math.clamp((input.Position.X - sliderBar.AbsolutePosition.X) / sliderBar.AbsoluteSize.X, 0, 1)
					local value = relativeX * (Max - Min) + Min
					updateSlider(value)
				end

				local dragging = false

				Slider_Click.InputBegan:Connect(function(input)
					if input.UserInputType == Enum.UserInputType.MouseButton1 or input.UserInputType == Enum.UserInputType.Touch then
						dragging = true
						move(input)
					end
				end)

				Slider_Click.InputEnded:Connect(function(input)
					if input.UserInputType == Enum.UserInputType.MouseButton1 or input.UserInputType == Enum.UserInputType.Touch then
						dragging = false
					end
				end)

				U.InputChanged:Connect(function(input)
					if dragging and (input.UserInputType == Enum.UserInputType.MouseMovement or input.UserInputType == Enum.UserInputType.Touch) then
						move(input)
					end
				end)
				
				function Set:SetTitle(txt)
					Slider_TextLabel.Text = txt
				end
				
				function Set:SetValue(va)
					updateSlider(va)
				end
				
				return Set
			end

			function section:Dropdown(p)
				local Title = p.Title or 'dropdown'
				local Desc = p.Desc or ''
				local List = p.List or {}
				local Value = p.Value or List[1]
				local Multi = p.Multi or false
				local Callback = p.Callback or function() end
				
				local Dropdown_Frame = Instance.new("Frame", Section_FuncFrame)
				local Dropdown_UICorner = Instance.new("UICorner", Dropdown_Frame)
				local Dropdown_ContainerFrame = Instance.new("Frame", Dropdown_Frame)
				local Dropdown_UIListLayout = Instance.new("UIListLayout", Dropdown_ContainerFrame)
				local Dropdown_UIPadding = Instance.new("UIPadding", Dropdown_ContainerFrame)
				local Dropdown_Bar = Instance.new("Frame", Dropdown_ContainerFrame)
				local Dropdown_BarUICorner = Instance.new("UICorner", Dropdown_Bar)
				local Dropdown_BarContainer = Instance.new("Frame", Dropdown_Bar)
				local Dropdown_Arrow = Instance.new("ImageLabel", Dropdown_BarContainer)
				local Dropdown_ValueLabel = Instance.new("TextLabel", Dropdown_BarContainer)
				local Dropdown_BarPadding = Instance.new("UIPadding", Dropdown_BarContainer)
				local Dropdown_TextFrame = Instance.new("Frame", Dropdown_Frame)
				local Dropdown_TextPadding = Instance.new("UIPadding", Dropdown_TextFrame)
				local Dropdown_TextLabel = Instance.new("TextLabel", Dropdown_TextFrame)

				Dropdown_Frame.Name = "Dropdown"
				Dropdown_Frame.BackgroundColor3 = Color3.fromRGB(88,88,88)
				Dropdown_Frame.BackgroundTransparency = 0.8999999761581421
				Dropdown_Frame.BorderColor3 = Color3.fromRGB(0,0,0)
				Dropdown_Frame.BorderSizePixel = 0
				Dropdown_Frame.Size = UDim2.new(1, 0,0, 50)
				Dropdown_Frame.ClipsDescendants = true

				Dropdown_UICorner.CornerRadius = UDim.new(0,6)

				Dropdown_ContainerFrame.AnchorPoint = Vector2.new(0, 1)
				Dropdown_ContainerFrame.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Dropdown_ContainerFrame.BackgroundTransparency = 1
				Dropdown_ContainerFrame.BorderColor3 = Color3.fromRGB(0,0,0)
				Dropdown_ContainerFrame.BorderSizePixel = 0
				Dropdown_ContainerFrame.Position = UDim2.new(0, 0,1, 0)
				Dropdown_ContainerFrame.Size = UDim2.new(1, 0,0, 30)

				Dropdown_UIListLayout.HorizontalAlignment = Enum.HorizontalAlignment.Right
				Dropdown_UIListLayout.SortOrder = Enum.SortOrder.LayoutOrder
				Dropdown_UIListLayout.VerticalAlignment = Enum.VerticalAlignment.Center

				Dropdown_UIPadding.PaddingLeft = UDim.new(0,8)
				Dropdown_UIPadding.PaddingRight = UDim.new(0,8)

				Dropdown_Bar.Name = "DropdownBar"
				Dropdown_Bar.BackgroundColor3 = Color3.fromRGB(23,23,23)
				Dropdown_Bar.BorderColor3 = Color3.fromRGB(0,0,0)
				Dropdown_Bar.BorderSizePixel = 0
				Dropdown_Bar.Size = UDim2.new(1, 0,0, 20)

				Dropdown_BarUICorner.CornerRadius = UDim.new(0,4)

				Dropdown_BarContainer.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Dropdown_BarContainer.BackgroundTransparency = 1
				Dropdown_BarContainer.BorderColor3 = Color3.fromRGB(0,0,0)
				Dropdown_BarContainer.BorderSizePixel = 0
				Dropdown_BarContainer.Size = UDim2.new(1, 0,1, 0)

				Dropdown_Arrow.AnchorPoint = Vector2.new(1, 0.5)
				Dropdown_Arrow.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Dropdown_Arrow.BackgroundTransparency = 1
				Dropdown_Arrow.BorderColor3 = Color3.fromRGB(0,0,0)
				Dropdown_Arrow.BorderSizePixel = 0
				Dropdown_Arrow.Position = UDim2.new(1, 0,0.5, 0)
				Dropdown_Arrow.Size = UDim2.new(0, 10,0, 10)
				Dropdown_Arrow.Image = "rbxassetid://13858688108"

				Dropdown_ValueLabel.Name = "TextLabelValue"
				Dropdown_ValueLabel.AnchorPoint = Vector2.new(.5, 0.5)
				Dropdown_ValueLabel.AutomaticSize = Enum.AutomaticSize.X
				Dropdown_ValueLabel.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Dropdown_ValueLabel.BackgroundTransparency = 1
				Dropdown_ValueLabel.BorderColor3 = Color3.fromRGB(0,0,0)
				Dropdown_ValueLabel.BorderSizePixel = 0
				Dropdown_ValueLabel.Position = UDim2.new(.5, 0,0.5, 0)
				Dropdown_ValueLabel.Size = UDim2.new(1, 0,1, 0)
				Dropdown_ValueLabel.Font = Enum.Font.GothamBold
				Dropdown_ValueLabel.RichText = true
				Dropdown_ValueLabel.Text = ""
				Dropdown_ValueLabel.TextColor3 = Color3.fromRGB(255,255,255)
				Dropdown_ValueLabel.TextSize = 10
				Dropdown_ValueLabel.TextTransparency = 0.5
				Dropdown_ValueLabel.ClipsDescendants = true

				Dropdown_BarPadding.PaddingLeft = UDim.new(0,5)
				Dropdown_BarPadding.PaddingRight = UDim.new(0,5)

				Dropdown_TextFrame.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Dropdown_TextFrame.BackgroundTransparency = 1
				Dropdown_TextFrame.BorderColor3 = Color3.fromRGB(0,0,0)
				Dropdown_TextFrame.BorderSizePixel = 0
				Dropdown_TextFrame.Size = UDim2.new(0.8, 0,0, 25)

				Dropdown_TextPadding.PaddingLeft = UDim.new(0,10)

				Dropdown_TextLabel.AnchorPoint = Vector2.new(0, 0.5)
				Dropdown_TextLabel.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Dropdown_TextLabel.BackgroundTransparency = 1
				Dropdown_TextLabel.BorderColor3 = Color3.fromRGB(0,0,0)
				Dropdown_TextLabel.BorderSizePixel = 0
				Dropdown_TextLabel.Position = UDim2.new(0, 0,0.5, 0)
				Dropdown_TextLabel.Size = UDim2.new(1, 0,0, 16)
				Dropdown_TextLabel.Font = Enum.Font.GothamBold
				Dropdown_TextLabel.RichText = true
				Dropdown_TextLabel.Text = Title
				Dropdown_TextLabel.TextColor3 = Color3.fromRGB(255,255,255)
				Dropdown_TextLabel.TextSize = 11
				Dropdown_TextLabel.TextWrapped = true
				Dropdown_TextLabel.TextXAlignment = Enum.TextXAlignment.Left
				
				local Dropdown_SelectFrame = Instance.new("Frame", ScreenGui)
				local Dropdown_SelectUICorner = Instance.new("UICorner", Dropdown_SelectFrame)
				local Dropdown_ScrollContainer = Instance.new("Frame", Dropdown_SelectFrame)
				local Dropdown_ScrollingFrame = Instance.new("ScrollingFrame", Dropdown_ScrollContainer)
				local Dropdown_ScrollUIListLayout = Instance.new("UIListLayout", Dropdown_ScrollingFrame)
				local Dropdown_ScrollPadding = Instance.new("UIPadding", Dropdown_ScrollingFrame)
				local Dropdown_ScrollContainerPadding = Instance.new("UIPadding", Dropdown_ScrollContainer)
				local Dropdown_SearchContainer = Instance.new("Frame", Dropdown_SelectFrame)
				local Dropdown_SearchFrame = Instance.new("Frame", Dropdown_SearchContainer)
				local Dropdown_SearchUICorner = Instance.new("UICorner", Dropdown_SearchFrame)
				local Dropdown_SearchInnerFrame = Instance.new("Frame", Dropdown_SearchFrame)
				local Dropdown_SearchPadding = Instance.new("UIPadding", Dropdown_SearchInnerFrame)
				local Dropdown_SearchTextBox = Instance.new("TextBox", Dropdown_SearchInnerFrame)
				local Dropdown_SearchContainerPadding = Instance.new("UIPadding", Dropdown_SearchContainer)

				Dropdown_SelectFrame.Name = "DropdownSelect"
				Dropdown_SelectFrame.BackgroundColor3 = Color3.fromRGB(23,23,23)
				Dropdown_SelectFrame.BorderColor3 = Color3.fromRGB(0,0,0)
				Dropdown_SelectFrame.BorderSizePixel = 0
				Dropdown_SelectFrame.Position = UDim2.new(0, 0,0, 0)
				Dropdown_SelectFrame.Size = UDim2.new(0, 170,0, 0)
				Dropdown_SelectFrame.ClipsDescendants = true
				Dropdown_SelectFrame.Visible = false

				Dropdown_SelectUICorner.CornerRadius = UDim.new(0,6)

				Dropdown_ScrollContainer.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Dropdown_ScrollContainer.BackgroundTransparency = 1
				Dropdown_ScrollContainer.BorderColor3 = Color3.fromRGB(0,0,0)
				Dropdown_ScrollContainer.BorderSizePixel = 0
				Dropdown_ScrollContainer.Size = UDim2.new(1, 0,1, 0)

				Dropdown_ScrollingFrame.Name = "ScrollingFrame"
				Dropdown_ScrollingFrame.Active = true
				Dropdown_ScrollingFrame.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Dropdown_ScrollingFrame.BackgroundTransparency = 1
				Dropdown_ScrollingFrame.BorderColor3 = Color3.fromRGB(0,0,0)
				Dropdown_ScrollingFrame.BorderSizePixel = 0
				Dropdown_ScrollingFrame.Size = UDim2.new(1, 0,1, 0)
				Dropdown_ScrollingFrame.ClipsDescendants = true
				Dropdown_ScrollingFrame.AutomaticCanvasSize = Enum.AutomaticSize.None
				Dropdown_ScrollingFrame.BottomImage = "rbxasset://textures/ui/Scroll/scroll-bottom.png"
				Dropdown_ScrollingFrame.CanvasPosition = Vector2.new(0, 0)
				Dropdown_ScrollingFrame.ElasticBehavior = Enum.ElasticBehavior.WhenScrollable
				Dropdown_ScrollingFrame.HorizontalScrollBarInset = Enum.ScrollBarInset.None
				Dropdown_ScrollingFrame.MidImage = "rbxasset://textures/ui/Scroll/scroll-middle.png"
				Dropdown_ScrollingFrame.ScrollBarImageColor3 = Color3.fromRGB(0,0,0)
				Dropdown_ScrollingFrame.ScrollBarImageTransparency = 0
				Dropdown_ScrollingFrame.ScrollBarThickness = 0
				Dropdown_ScrollingFrame.ScrollingDirection = Enum.ScrollingDirection.XY
				Dropdown_ScrollingFrame.TopImage = "rbxasset://textures/ui/Scroll/scroll-top.png"
				Dropdown_ScrollingFrame.VerticalScrollBarInset = Enum.ScrollBarInset.None
				Dropdown_ScrollingFrame.VerticalScrollBarPosition = Enum.VerticalScrollBarPosition.Right

				Dropdown_ScrollUIListLayout.Padding = UDim.new(0,5)
				Dropdown_ScrollUIListLayout.SortOrder = Enum.SortOrder.LayoutOrder

				Dropdown_ScrollPadding.PaddingBottom = UDim.new(0,5)
				Dropdown_ScrollPadding.PaddingLeft = UDim.new(0,3)
				Dropdown_ScrollPadding.PaddingRight = UDim.new(0,3)
				Dropdown_ScrollPadding.PaddingTop = UDim.new(0,5)

				Dropdown_ScrollContainerPadding.PaddingTop = UDim.new(0,30)

				Dropdown_SearchContainer.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Dropdown_SearchContainer.BackgroundTransparency = 1
				Dropdown_SearchContainer.BorderColor3 = Color3.fromRGB(0,0,0)
				Dropdown_SearchContainer.BorderSizePixel = 0
				Dropdown_SearchContainer.Size = UDim2.new(1, 0,1, 0)

				Dropdown_SearchFrame.Name = "Search"
				Dropdown_SearchFrame.BackgroundColor3 = Color3.fromRGB(50,50,50)
				Dropdown_SearchFrame.BackgroundTransparency = 0.8999999761581421
				Dropdown_SearchFrame.BorderColor3 = Color3.fromRGB(0,0,0)
				Dropdown_SearchFrame.BorderSizePixel = 0
				Dropdown_SearchFrame.Size = UDim2.new(1, 0,0, 25)
				Dropdown_SearchFrame.ClipsDescendants = true

				Dropdown_SearchUICorner.CornerRadius = UDim.new(0,6)

				Dropdown_SearchInnerFrame.AnchorPoint = Vector2.new(0, 0.5)
				Dropdown_SearchInnerFrame.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Dropdown_SearchInnerFrame.BackgroundTransparency = 1
				Dropdown_SearchInnerFrame.BorderColor3 = Color3.fromRGB(0,0,0)
				Dropdown_SearchInnerFrame.BorderSizePixel = 0
				Dropdown_SearchInnerFrame.Position = UDim2.new(0, 0,0.5, 0)
				Dropdown_SearchInnerFrame.Size = UDim2.new(0.8, 0,0.8, 0)

				Dropdown_SearchPadding.PaddingLeft = UDim.new(0,10)

				Dropdown_SearchTextBox.Name = "TextLabel"
				Dropdown_SearchTextBox.AnchorPoint = Vector2.new(0, 0.5)
				Dropdown_SearchTextBox.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Dropdown_SearchTextBox.BackgroundTransparency = 1
				Dropdown_SearchTextBox.BorderColor3 = Color3.fromRGB(0,0,0)
				Dropdown_SearchTextBox.BorderSizePixel = 0
				Dropdown_SearchTextBox.CursorPosition = -1
				Dropdown_SearchTextBox.Position = UDim2.new(0, 0,0.5, 0)
				Dropdown_SearchTextBox.Size = UDim2.new(1, 0,0, 16)
				Dropdown_SearchTextBox.Font = Enum.Font.GothamBold
				Dropdown_SearchTextBox.PlaceholderColor3 = Color3.fromRGB(178,178,178)
				Dropdown_SearchTextBox.PlaceholderText = "Search . . ."
				Dropdown_SearchTextBox.RichText = true
				Dropdown_SearchTextBox.Text = ""
				Dropdown_SearchTextBox.TextColor3 = Color3.fromRGB(255,255,255)
				Dropdown_SearchTextBox.TextSize = 10
				Dropdown_SearchTextBox.TextWrapped = true
				Dropdown_SearchTextBox.TextXAlignment = Enum.TextXAlignment.Left

				Dropdown_SearchContainerPadding.PaddingBottom = UDim.new(0,5)
				Dropdown_SearchContainerPadding.PaddingLeft = UDim.new(0,3)
				Dropdown_SearchContainerPadding.PaddingRight = UDim.new(0,3)
				Dropdown_SearchContainerPadding.PaddingTop = UDim.new(0,5)
				
				Dropdown_ValueLabel:GetPropertyChangedSignal('Text'):Connect(function()
					Dropdown_ValueLabel.TextTransparency = 1
					tw({v = Dropdown_ValueLabel, t = 0.8, s = Enum.EasingStyle.Linear, d = "Out", g = {TextTransparency = 0}}):Play()
				end)
				
				local itemslist = {}
				local selectedValues = {}
				local selectedItem
				
				function itemslist:Clear(a)
					local function shouldClear(v)
						if a == nil then
							return true
						elseif type(a) == "string" then
							return v.Frame:FindFirstChild("TextLabel") and v.Frame.TextLabel.Text == a
						elseif type(a) == "table" then
							for _, name in ipairs(a) do
								if v.Frame:FindFirstChild("TextLabel") and v.Frame.TextLabel.Text == name then
									return true
								end
							end
						end
						return false
					end

					if Multi then
						selectedValues = {}
						Dropdown_ValueLabel.Text = "--"
						pcall(Callback, selectedValues)
					end

					for _, v in ipairs(Dropdown_ScrollingFrame:GetChildren()) do
						if v:IsA("Frame") and shouldClear(v) then
							if selectedItem and v.Frame:FindFirstChild("TextLabel") and v.Frame.TextLabel.Text == selectedItem then
								selectedItem = nil
								Dropdown_ValueLabel.Text = "--"
								pcall(Callback, Dropdown_ValueLabel.Text)
							end
							v:Destroy()
						end
					end

					if selectedItem == a or Dropdown_ValueLabel.Text == a then
						selectedItem = nil
						Dropdown_ValueLabel.Text = "--"
					end

					if a == nil then
						selectedItem = nil
						Dropdown_ValueLabel.Text = "--"
					end

					Value = nil
				end
				
				function itemslist:Add(text)
					local Dropdown_ItemFrame = Instance.new("Frame", Dropdown_ScrollingFrame)
					local Dropdown_ItemUICorner = Instance.new("UICorner", Dropdown_ItemFrame)
					local Dropdown_ItemTextFrame = Instance.new("Frame", Dropdown_ItemFrame)
					local Dropdown_ItemTextPadding = Instance.new("UIPadding", Dropdown_ItemTextFrame)
					local Dropdown_ItemTextLabel = Instance.new("TextLabel", Dropdown_ItemTextFrame)
					
					Dropdown_ItemFrame.Name = "Item"
					Dropdown_ItemFrame.BackgroundColor3 = Color3.fromRGB(88,88,88)
					Dropdown_ItemFrame.BackgroundTransparency = 0.89
					Dropdown_ItemFrame.BorderColor3 = Color3.fromRGB(0,0,0)
					Dropdown_ItemFrame.BorderSizePixel = 0
					Dropdown_ItemFrame.Size = UDim2.new(1, 0,0, 25)
					Dropdown_ItemFrame.ClipsDescendants = true

					Dropdown_ItemUICorner.CornerRadius = UDim.new(0,6)

					Dropdown_ItemTextFrame.AnchorPoint = Vector2.new(0, 0.5)
					Dropdown_ItemTextFrame.BackgroundColor3 = Color3.fromRGB(255,255,255)
					Dropdown_ItemTextFrame.BackgroundTransparency = 1
					Dropdown_ItemTextFrame.BorderColor3 = Color3.fromRGB(0,0,0)
					Dropdown_ItemTextFrame.BorderSizePixel = 0
					Dropdown_ItemTextFrame.Position = UDim2.new(0, 0,0.5, 0)
					Dropdown_ItemTextFrame.Size = UDim2.new(0.8, 0,0.8, 0)

					Dropdown_ItemTextPadding.PaddingLeft = UDim.new(0,10)

					Dropdown_ItemTextLabel.AnchorPoint = Vector2.new(0, 0.5)
					Dropdown_ItemTextLabel.BackgroundColor3 = Color3.fromRGB(255,255,255)
					Dropdown_ItemTextLabel.BackgroundTransparency = 1
					Dropdown_ItemTextLabel.BorderColor3 = Color3.fromRGB(0,0,0)
					Dropdown_ItemTextLabel.BorderSizePixel = 0
					Dropdown_ItemTextLabel.Position = UDim2.new(0, 0,0.5, 0)
					Dropdown_ItemTextLabel.Size = UDim2.new(1, 0,0, 16)
					Dropdown_ItemTextLabel.Font = Enum.Font.GothamBold
					Dropdown_ItemTextLabel.RichText = true
					Dropdown_ItemTextLabel.Text = text
					Dropdown_ItemTextLabel.TextColor3 = Color3.fromRGB(255,255,255)
					Dropdown_ItemTextLabel.TextSize = 10
					Dropdown_ItemTextLabel.TextWrapped = true
					Dropdown_ItemTextLabel.TextXAlignment = Enum.TextXAlignment.Left
					Dropdown_ItemTextLabel.TextTransparency = 0.5
					
					local Dropdown_ItemClick = click(Dropdown_ItemFrame)

					local function unselect()
						tw({v = Dropdown_ItemFrame, t = 0.15, s = Enum.EasingStyle.Linear, d = "Out", g = {BackgroundColor3 = Color3.fromRGB(88,88,88)}}):Play()
						tw({v = Dropdown_ItemTextLabel, t = 0.15, s = Enum.EasingStyle.Linear, d = "Out", g = {TextTransparency = 0.5}}):Play()
					end
					local function hasselect()
						tw({v = Dropdown_ItemFrame, t = 0.15, s = Enum.EasingStyle.Linear, d = "Out", g = {BackgroundColor3 = Color3.fromRGB(66,66,66)}}):Play()
						tw({v = Dropdown_ItemTextLabel, t = 0.15, s = Enum.EasingStyle.Linear, d = "Out", g = {TextTransparency = 0}}):Play()    
					end

					Dropdown_ItemClick.MouseButton1Click:Connect(function()
						if Multi then
							if selectedValues[text] then
								selectedValues[text] = nil
								unselect()
							else
								selectedValues[text] = true
								hasselect()
							end
							local selectedList = {}
							for i, v in pairs(selectedValues) do
								table.insert(selectedList, i)
							end
							if #selectedList > 0 then
								Dropdown_ValueLabel.Text = table.concat(selectedList, ", ")
							else
								Dropdown_ValueLabel.Text = "--"
							end
							pcall(Callback, selectedList)
						else
							for i,v in pairs(Dropdown_ScrollingFrame:GetChildren()) do
								if v:IsA("Frame") then
									tw({v = v.Frame.TextLabel, t = 0.15, s = Enum.EasingStyle.Linear, d = "Out", g = {TextTransparency = 0.5}}):Play()
									tw({v = v, t = 0.15, s = Enum.EasingStyle.Linear, d = "Out", g = {BackgroundColor3 = Color3.fromRGB(88,88,88)}}):Play()    
								end
							end
							hasselect()
							Value = text
							Dropdown_ValueLabel.Text = text
							pcall(Callback, Dropdown_ValueLabel.Text)
						end
					end)

					local function isValueInTable(val, tbl)
						if type(tbl) ~= "table" then
							return false
						end

						for _, v in pairs(tbl) do
							if v == val then
								return true
							end
						end
						return false
					end

					task.spawn(function()
						if Multi then
							if isValueInTable(text, Value) then
								hasselect()
								selectedValues[text] = true
								local selectedList = {}
								for i, v in pairs(selectedValues) do
									table.insert(selectedList, i)
								end
								if #selectedList > 0 then
									Dropdown_ValueLabel.Text = table.concat(selectedList, ", ")
								else
									Dropdown_ValueLabel.Text = "--"
								end
								pcall(Callback,selectedList)
							end
						else
							if text == Value then
								hasselect()
								Value = text
								Dropdown_ValueLabel.Text = text
								pcall(Callback,Dropdown_ValueLabel.Text)
							end
						end
					end)
				end
				
				for i, v in ipairs(List) do
					itemslist:Add(v, i)
				end
				
				local Dropdown_Click = click(Dropdown_Frame)
				local isopen = false

				Dropdown_SearchTextBox:GetPropertyChangedSignal('Text'):Connect(function()
					local SearchT = string.lower(Dropdown_SearchTextBox.Text)
					for _, v in pairs(Dropdown_ScrollingFrame:GetChildren()) do
						if v:IsA("Frame") then
							if SearchT ~= "" and v.Frame:FindFirstChild("TextLabel") then
								if string.find(string.lower(v.Frame.TextLabel.Text), SearchT) then
									v.Visible = true
								else
									v.Visible = false
								end
							else
								v.Visible = true
							end
						end
					end

					if isopen then
						if Dropdown_ScrollUIListLayout.AbsoluteContentSize.Y + 50 >= 170 then
							tw({v = Dropdown_SelectFrame, t = .5, s = Enum.EasingStyle.Exponential, d = "Out", g = {Size = UDim2.new(0, Dropdown_Bar.AbsoluteSize.X, 0, 170)}}):Play()
						else
							tw({v = Dropdown_SelectFrame, t = .5, s = Enum.EasingStyle.Exponential, d = "Out", g = {Size = UDim2.new(0, Dropdown_Bar.AbsoluteSize.X, 0, Dropdown_ScrollUIListLayout.AbsoluteContentSize.Y + 40)}}):Play()
						end
					end
				end)
				
				Dropdown_SelectFrame.Position = UDim2.new(0, Dropdown_Bar.AbsolutePosition.X, 0, Dropdown_Bar.AbsolutePosition.Y + Dropdown_Bar.AbsoluteSize.Y + 5)
				
				local function open()
					if isopen then return end
					Dropdown_SelectFrame.Visible = true
					if Dropdown_ScrollUIListLayout.AbsoluteContentSize.Y + 50 >= 170 then
						tw({v = Dropdown_SelectFrame, t = .5, s = Enum.EasingStyle.Exponential, d = "Out", g = {Size = UDim2.new(0, Dropdown_Bar.AbsoluteSize.X, 0, 170)}}):Play()
					else
						tw({v = Dropdown_SelectFrame, t = .5, s = Enum.EasingStyle.Exponential, d = "Out", g = {Size = UDim2.new(0, Dropdown_Bar.AbsoluteSize.X, 0, Dropdown_ScrollUIListLayout.AbsoluteContentSize.Y + 40)}}):Play()
					end
					tw({v = Dropdown_SelectFrame, t = 0.3, s = Enum.EasingStyle.Exponential, d = "Out", g = {Position = UDim2.new(0, Dropdown_Bar.AbsolutePosition.X, 0, Dropdown_Bar.AbsolutePosition.Y + Dropdown_Bar.AbsoluteSize.Y + 5)}}):Play()
					tw({v = Dropdown_Arrow, t = 0.3, s = Enum.EasingStyle.Exponential, d = "Out", g = {Rotation = -90}}):Play()
					isopen = true
				end
				local function close()
					if not isopen then return end
					local f = tw({v = Dropdown_SelectFrame, t = .5, s = Enum.EasingStyle.Exponential, d = "Out", g = {Size = UDim2.new(0, Dropdown_Bar.AbsoluteSize.X, 0, 0), Position = UDim2.new(0, Dropdown_Bar.AbsolutePosition.X, 0, Dropdown_Bar.AbsolutePosition.Y + Dropdown_Bar.AbsoluteSize.Y - 5)}})
					f:Play()
					tw({v = Dropdown_Arrow, t = 0.3, s = Enum.EasingStyle.Exponential, d = "Out", g = {Rotation = 0}}):Play()
					f.Completed:Connect(function()
						isopen = false
						Dropdown_SelectFrame.Visible = false
					end)
				end

				U.InputBegan:Connect(function(A)
					if A.UserInputType == Enum.UserInputType.MouseButton1 or A.UserInputType == Enum.UserInputType.Touch then
						local B, C = Dropdown_SelectFrame.AbsolutePosition, Dropdown_SelectFrame.AbsoluteSize
						if game:GetService "Players".LocalPlayer:GetMouse().X < B.X or game:GetService "Players".LocalPlayer:GetMouse().X > B.X + C.X or game:GetService "Players".LocalPlayer:GetMouse().Y < (B.Y - 20 - 1) or game:GetService "Players".LocalPlayer:GetMouse().Y > B.Y + C.Y then
							close()
						end
					end
				end)

				changecanvas(Dropdown_ScrollingFrame, Dropdown_ScrollUIListLayout, 5)

				Dropdown_Click.MouseButton1Click:Connect(function()
					if isopen then
						close()
					else
						open()
					end
				end)

				function itemslist:SetTitle(txt)
					Dropdown_TextLabel.Text = txt
				end
				
				return itemslist
			end

			function section:Button(p)
				local Callback = p.Callback or function() end
				local Button_Frame = Instance.new("Frame", Section_FuncFrame)
				local Button_UICorner = Instance.new("UICorner", Button_Frame)
				local Button_TextFrame = Instance.new("Frame", Button_Frame)
				local Button_UIPadding = Instance.new("UIPadding", Button_TextFrame)
				local Button_TextLabel = Instance.new("TextLabel", Button_TextFrame)
				local Button_UIGradient = Instance.new("UIGradient", Button_Frame)

				Button_Frame.Name = "Button"
				Button_Frame.BackgroundColor3 = Color3.fromRGB(unpack(ColorUi))
				Button_Frame.BorderColor3 = Color3.fromRGB(0,0,0)
				Button_Frame.BorderSizePixel = 0
				Button_Frame.Size = UDim2.new(1, 0,0, 30)
				Button_Frame.ClipsDescendants = true

				Button_UICorner.CornerRadius = UDim.new(0,6)

				Button_TextFrame.AnchorPoint = Vector2.new(0, 0.5)
				Button_TextFrame.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Button_TextFrame.BackgroundTransparency = 1
				Button_TextFrame.BorderColor3 = Color3.fromRGB(0,0,0)
				Button_TextFrame.BorderSizePixel = 0
				Button_TextFrame.Position = UDim2.new(0, 0,0.5, 0)
				Button_TextFrame.Size = UDim2.new(1, 0,1, 0)

				Button_UIPadding.PaddingLeft = UDim.new(0,10)

				Button_TextLabel.AnchorPoint = Vector2.new(0, 0.5)
				Button_TextLabel.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Button_TextLabel.BackgroundTransparency = 1
				Button_TextLabel.BorderColor3 = Color3.fromRGB(0,0,0)
				Button_TextLabel.BorderSizePixel = 0
				Button_TextLabel.Position = UDim2.new(0, 0,0.5, 0)
				Button_TextLabel.Size = UDim2.new(1, 0,0, 16)
				Button_TextLabel.Font = Enum.Font.GothamBold
				Button_TextLabel.RichText = true
				Button_TextLabel.Text = p.Title
				Button_TextLabel.TextColor3 = Color3.fromRGB(255,255,255)
				Button_TextLabel.TextSize = 11
				Button_TextLabel.TextWrapped = true

				Button_UIGradient.Color = ColorSequence.new{ColorSequenceKeypoint.new(0, Color3.fromRGB(255, 255, 255)), ColorSequenceKeypoint.new(1, Color3.fromRGB(209, 209, 209))}
				Button_UIGradient.Rotation = 90
				
				local Button_Click = click(Button_Frame)
				Button_Click.MouseButton1Click:Connect(function()
					jc(Button_Click, Button_Frame)
					pcall(Callback)
				end)
				
				local Set = {}

				function Set:SetTitle(txt)
					Button_TextLabel.Text = txt
				end

				return Set
			end

			function section:Input(p)
				local Title = p.Title or 'textbox'
				local PlaceholderText = p.PlaceholderText or ''
				local Value = p.Value or ''
				local Callback = p.Callback or function() end
				
				local Input_Frame = Instance.new("Frame", Section_FuncFrame)
				local Input_UICorner = Instance.new("UICorner", Input_Frame)
				local Input_ContainerFrame = Instance.new("Frame", Input_Frame)
				local Input_UIListLayout = Instance.new("UIListLayout", Input_ContainerFrame)
				local Input_UIPadding = Instance.new("UIPadding", Input_ContainerFrame)
				local Input_BoxFrame = Instance.new("Frame", Input_ContainerFrame)
				local Input_BoxUICorner = Instance.new("UICorner", Input_BoxFrame)
				local Input_TextContainer = Instance.new("Frame", Input_BoxFrame)
				local Input_TextPadding = Instance.new("UIPadding", Input_TextContainer)
				local Input_TextBox = Instance.new("TextBox", Input_TextContainer)
				local Input_LabelFrame = Instance.new("Frame", Input_Frame)
				local Input_LabelPadding = Instance.new("UIPadding", Input_LabelFrame)
				local Input_Label = Instance.new("TextLabel", Input_LabelFrame)
				local Input_Icon = Instance.new("ImageLabel", Input_LabelFrame)

				Input_Frame.Name = "Input"
				Input_Frame.BackgroundColor3 = Color3.fromRGB(88,88,88)
				Input_Frame.BackgroundTransparency = 0.8999999761581421
				Input_Frame.BorderColor3 = Color3.fromRGB(0,0,0)
				Input_Frame.BorderSizePixel = 0
				Input_Frame.Size = UDim2.new(1, 0,0, 50)
				Input_Frame.ClipsDescendants = true

				Input_UICorner.CornerRadius = UDim.new(0,6)

				Input_ContainerFrame.AnchorPoint = Vector2.new(0, 1)
				Input_ContainerFrame.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Input_ContainerFrame.BackgroundTransparency = 1
				Input_ContainerFrame.BorderColor3 = Color3.fromRGB(0,0,0)
				Input_ContainerFrame.BorderSizePixel = 0
				Input_ContainerFrame.Position = UDim2.new(0, 0,1, 0)
				Input_ContainerFrame.Size = UDim2.new(1, 0,0, 30)

				Input_UIListLayout.HorizontalAlignment = Enum.HorizontalAlignment.Right
				Input_UIListLayout.SortOrder = Enum.SortOrder.LayoutOrder
				Input_UIListLayout.VerticalAlignment = Enum.VerticalAlignment.Center

				Input_UIPadding.PaddingLeft = UDim.new(0,8)
				Input_UIPadding.PaddingRight = UDim.new(0,8)

				Input_BoxFrame.Name = "InputBox"
				Input_BoxFrame.BackgroundColor3 = Color3.fromRGB(23,23,23)
				Input_BoxFrame.BorderColor3 = Color3.fromRGB(0,0,0)
				Input_BoxFrame.BorderSizePixel = 0
				Input_BoxFrame.Size = UDim2.new(1, 0,0, 20)

				Input_BoxUICorner.CornerRadius = UDim.new(0,4)

				Input_TextContainer.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Input_TextContainer.BackgroundTransparency = 1
				Input_TextContainer.BorderColor3 = Color3.fromRGB(0,0,0)
				Input_TextContainer.BorderSizePixel = 0
				Input_TextContainer.Size = UDim2.new(1, 0,1, 0)

				Input_TextPadding.PaddingLeft = UDim.new(0,8)
				Input_TextPadding.PaddingRight = UDim.new(0,5)

				Input_TextBox.Name = "TextLabelValue"
				Input_TextBox.AnchorPoint = Vector2.new(1, 0.5)
				Input_TextBox.AutomaticSize = Enum.AutomaticSize.X
				Input_TextBox.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Input_TextBox.BackgroundTransparency = 1
				Input_TextBox.BorderColor3 = Color3.fromRGB(0,0,0)
				Input_TextBox.BorderSizePixel = 0
				Input_TextBox.CursorPosition = -1
				Input_TextBox.Position = UDim2.new(1, 0,0.5, 0)
				Input_TextBox.Size = UDim2.new(1, 0,1, 0)
				Input_TextBox.Font = Enum.Font.GothamBold
				Input_TextBox.PlaceholderColor3 = Color3.fromRGB(178,178,178)
				Input_TextBox.PlaceholderText = PlaceholderText
				Input_TextBox.RichText = true
				Input_TextBox.Text = Value
				Input_TextBox.TextColor3 = Color3.fromRGB(255,255,255)
				Input_TextBox.TextSize = 10
				Input_TextBox.TextWrapped = true
				Input_TextBox.TextXAlignment = Enum.TextXAlignment.Left

				Input_LabelFrame.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Input_LabelFrame.BackgroundTransparency = 1
				Input_LabelFrame.BorderColor3 = Color3.fromRGB(0,0,0)
				Input_LabelFrame.BorderSizePixel = 0
				Input_LabelFrame.Size = UDim2.new(1, 0,0, 25)

				Input_LabelPadding.PaddingLeft = UDim.new(0,10)
				Input_LabelPadding.PaddingRight = UDim.new(0,10)

				Input_Label.AnchorPoint = Vector2.new(0, 0.5)
				Input_Label.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Input_Label.BackgroundTransparency = 1
				Input_Label.BorderColor3 = Color3.fromRGB(0,0,0)
				Input_Label.BorderSizePixel = 0
				Input_Label.Position = UDim2.new(0, 0,0.5, 0)
				Input_Label.Size = UDim2.new(1, 0,0, 16)
				Input_Label.Font = Enum.Font.GothamBold
				Input_Label.RichText = true
				Input_Label.Text = Title
				Input_Label.TextColor3 = Color3.fromRGB(255,255,255)
				Input_Label.TextSize = 11
				Input_Label.TextWrapped = true
				Input_Label.TextXAlignment = Enum.TextXAlignment.Left

				Input_Icon.AnchorPoint = Vector2.new(1, 0.5)
				Input_Icon.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Input_Icon.BackgroundTransparency = 1
				Input_Icon.BorderColor3 = Color3.fromRGB(0,0,0)
				Input_Icon.BorderSizePixel = 0
				Input_Icon.Position = UDim2.new(1, 0,0.5, 0)
				Input_Icon.Size = UDim2.new(0, 10,0, 10)
				Input_Icon.Image = "rbxassetid://13868675087"
				
				local function o()
					if #Input_TextBox.Text > 0 then
						pcall(Callback, Input_TextBox.Text)
					end
				end

				Input_TextBox.FocusLost:Connect(o)

				task.spawn(pcall,o)
				
				local Set = {}

				function Set:SetTitle(txt)
					Input_Label.Text = txt
				end

				return Set
			end

			function section:Label(p)
				local Label_Frame = Instance.new("Frame", Section_FuncFrame)
				local Label_UICorner = Instance.new("UICorner", Label_Frame)
				local Label_UIGradient = Instance.new("UIGradient", Label_Frame)
				local Label_TextLabel = Instance.new("TextLabel", Label_Frame)
				local Label_UIPadding = Instance.new("UIPadding", Label_Frame)

				Label_Frame.Name = "TextLabel"
				Label_Frame.AutomaticSize = Enum.AutomaticSize.Y
				Label_Frame.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Label_Frame.BackgroundTransparency = 1
				Label_Frame.BorderColor3 = Color3.fromRGB(0,0,0)
				Label_Frame.BorderSizePixel = 0
				Label_Frame.Size = UDim2.new(1, 0,0, 25)
				Label_Frame.ClipsDescendants = true

				Label_UICorner.CornerRadius = UDim.new(0,6)

				Label_UIGradient.Color = ColorSequence.new{ColorSequenceKeypoint.new(0, Color3.fromRGB(255, 255, 255)), ColorSequenceKeypoint.new(1, Color3.fromRGB(209, 209, 209))}
				Label_UIGradient.Rotation = 90

				Label_TextLabel.AutomaticSize = Enum.AutomaticSize.Y
				Label_TextLabel.BackgroundColor3 = Color3.fromRGB(255,255,255)
				Label_TextLabel.BackgroundTransparency = 1
				Label_TextLabel.BorderColor3 = Color3.fromRGB(0,0,0)
				Label_TextLabel.BorderSizePixel = 0
				Label_TextLabel.Size = UDim2.new(1, 0,0, 0)
				Label_TextLabel.Font = Enum.Font.GothamBold
				Label_TextLabel.RichText = true
				Label_TextLabel.Text = p.Title
				Label_TextLabel.TextColor3 = Color3.fromRGB(255,255,255)
				Label_TextLabel.TextSize = 11
				Label_TextLabel.TextWrapped = true
				Label_TextLabel.TextXAlignment = Enum.TextXAlignment[p.TextXAlignment or 'Center']

				Label_UIPadding.PaddingBottom = UDim.new(0,5)
				Label_UIPadding.PaddingTop = UDim.new(0,5)
				
				local Set = {}

				function Set:SetTitle(txt)
					Label_TextLabel.Text = txt
				end

				return Set
			end
			
			return section
		end
		
		return tab
	end
	
	return window
end

return library

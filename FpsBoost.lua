
if not _G.Ignore then
    _G.Ignore = {}
end

if not game:IsLoaded() then
    repeat
        task.wait()
    until game:IsLoaded()
end
if not _G.WJHOUW then
    _G.WJHOUW = {
        Players = {
            ["Ignore Me"] = true,
            ["Ignore Others"] = true,
            ["Ignore Tools"] = true
        },
        Meshes = {
            NoMesh = false,
            NoTexture = false,
            Destroy = false
        },
        Images = {
            Invisible = true,
            Destroy = false
        },
        Explosions = {
            Smaller = true,
            Invisible = false, -- Not recommended for PVP games
            Destroy = false -- Not recommended for PVP games
        },
        Particles = {
            Invisible = true,
            Destroy = false
        },
        TextLabels = {
            LowerQuality = false,
            Invisible = false,
            Destroy = false
        },
        MeshParts = {
            LowerQuality = true,
            Invisible = false,
            NoTexture = false,
            NoMesh = false,
            Destroy = false
        },
        Other = {
            ["FPS Cap"] = true, -- Set this true to uncap FPS
            ["No Camera Effects"] = true,
            ["No Clothes"] = true,
            ["Low Water Graphics"] = true,
            ["No Shadows"] = true,
            ["Low Rendering"] = true,
            ["Low Quality Parts"] = true,
            ["Low Quality Models"] = true,
            ["Reset Materials"] = true,
            ["Lower Quality MeshParts"] = true,
            ClearNilInstances = false
        }
    }
end
local Players, Lighting, StarterGui, MaterialService = game:GetService("Players"), game:GetService("Lighting"), game:GetService("StarterGui"), game:GetService("MaterialService")
local ME, CanBeEnabled = Players.LocalPlayer, {"ParticleEmitter", "Trail", "Smoke", "Fire", "Sparkles"}
local function PartOfCharacter(Inst)
    for i, v in pairs(Players:GetPlayers()) do
        if v ~= ME and v.Character and Inst:IsDescendantOf(v.Character) then
            return true
        end
    end
    return false
end
local function DescendantOfIgnore(Inst)
    for i, v in pairs(_G.Ignore) do
        if Inst:IsDescendantOf(v) then
            return true
        end
    end
    return false
end
local function CheckIfBad(Inst)
    if not Inst:IsDescendantOf(Players) and (_G.WJHOUW.Players["Ignore Others"] and not PartOfCharacter(Inst) 
    or not _G.WJHOUW.Players["Ignore Others"]) and (_G.WJHOUW.Players["Ignore Me"] and ME.Character and not Inst:IsDescendantOf(ME.Character) 
    or not _G.WJHOUW.Players["Ignore Me"]) and (_G.WJHOUW.Players["Ignore Tools"] and not Inst:IsA("BackpackItem") and not Inst:FindFirstAncestorWhichIsA("BackpackItem") 
    or not _G.WJHOUW.Players["Ignore Tools"]) and (_G.Ignore and not table.find(_G.Ignore, Inst) and not DescendantOfIgnore(Inst) 
    or (not _G.Ignore or type(_G.Ignore) ~= "table" or #_G.Ignore <= 0)) then
        if Inst:IsA("DataModelMesh") then
            if Inst:IsA("SpecialMesh") then
                if _G.WJHOUW.Meshes.NoMesh then
                    Inst.MeshId = ""
                end
                if _G.WJHOUW.Meshes.NoTexture then
                    Inst.TextureId = ""
                end
            end
            if _G.WJHOUW.Meshes.Destroy or _G.WJHOUW["No Meshes"] then
                Inst:Destroy()
            end
        elseif Inst:IsA("FaceInstance") then
            if _G.WJHOUW.Images.Invisible then
                Inst.Transparency = 1
                Inst.Shiny = 1
            end
            if _G.WJHOUW.Images.LowDetail then
                Inst.Shiny = 1
            end
            if _G.WJHOUW.Images.Destroy then
                Inst:Destroy()
            end
        elseif Inst:IsA("ShirtGraphic") then
            if _G.WJHOUW.Images.Invisible then
                Inst.Graphic = ""
            end
            if _G.WJHOUW.Images.Destroy then
                Inst:Destroy()
            end
        elseif table.find(CanBeEnabled, Inst.ClassName) then
            if _G.WJHOUW["Invisible Particles"] or _G.WJHOUW["No Particles"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["Invisible Particles"]) or (_G.WJHOUW.Particles and _G.WJHOUW.Particles.Invisible) then
                Inst.Enabled = false
            end
            if (_G.WJHOUW.Other and _G.WJHOUW.Other["No Particles"]) or (_G.WJHOUW.Particles and _G.WJHOUW.Particles.Destroy) then
                Inst:Destroy()
            end
        elseif Inst:IsA("PostEffect") and (_G.WJHOUW["No Camera Effects"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["No Camera Effects"])) then
            Inst.Enabled = false
        elseif Inst:IsA("Explosion") then
            if _G.WJHOUW["Smaller Explosions"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["Smaller Explosions"]) or (_G.WJHOUW.Explosions and _G.WJHOUW.Explosions.Smaller) then
                Inst.BlastPressure = 1
                Inst.BlastRadius = 1
            end
            if _G.WJHOUW["Invisible Explosions"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["Invisible Explosions"]) or (_G.WJHOUW.Explosions and _G.WJHOUW.Explosions.Invisible) then
                Inst.BlastPressure = 1
                Inst.BlastRadius = 1
                Inst.Visible = false
            end
            if _G.WJHOUW["No Explosions"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["No Explosions"]) or (_G.WJHOUW.Explosions and _G.WJHOUW.Explosions.Destroy) then
                Inst:Destroy()
            end
        elseif Inst:IsA("Clothing") or Inst:IsA("SurfaceAppearance") or Inst:IsA("BaseWrap") then
            if _G.WJHOUW["No Clothes"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["No Clothes"]) then
                Inst:Destroy()
            end
        elseif Inst:IsA("BasePart") and not Inst:IsA("MeshPart") then
            if _G.WJHOUW["Low Quality Parts"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["Low Quality Parts"]) then
                Inst.Material = Enum.Material.Plastic
                Inst.Reflectance = 0
            end
        elseif Inst:IsA("TextLabel") and Inst:IsDescendantOf(workspace) then
            if _G.WJHOUW["Lower Quality TextLabels"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["Lower Quality TextLabels"]) or (_G.WJHOUW.TextLabels and _G.WJHOUW.TextLabels.LowerQuality) then
                Inst.Font = Enum.Font.SourceSans
                Inst.TextScaled = false
                Inst.RichText = false
                Inst.TextSize = 14
            end
            if _G.WJHOUW["Invisible TextLabels"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["Invisible TextLabels"]) or (_G.WJHOUW.TextLabels and _G.WJHOUW.TextLabels.Invisible) then
                Inst.Visible = false
            end
            if _G.WJHOUW["No TextLabels"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["No TextLabels"]) or (_G.WJHOUW.TextLabels and _G.WJHOUW.TextLabels.Destroy) then
                Inst:Destroy()
            end
        elseif Inst:IsA("Model") then
            if _G.WJHOUW["Low Quality Models"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["Low Quality Models"]) then
                Inst.LevelOfDetail = 1
            end
        elseif Inst:IsA("MeshPart") then
            if _G.WJHOUW["Low Quality MeshParts"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["Low Quality MeshParts"]) or (_G.WJHOUW.MeshParts and _G.WJHOUW.MeshParts.LowerQuality) then
                Inst.RenderFidelity = 2
                Inst.Reflectance = 0
                Inst.Material = Enum.Material.Plastic
            end
            if _G.WJHOUW["Invisible MeshParts"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["Invisible MeshParts"]) or (_G.WJHOUW.MeshParts and _G.WJHOUW.MeshParts.Invisible) then
                Inst.Transparency = 1
                Inst.RenderFidelity = 2
                Inst.Reflectance = 0
                Inst.Material = Enum.Material.Plastic
            end
            if _G.WJHOUW.MeshParts and _G.WJHOUW.MeshParts.NoTexture then
                Inst.TextureID = ""
            end
            if _G.WJHOUW.MeshParts and _G.WJHOUW.MeshParts.NoMesh then
                Inst.MeshId = ""
            end
            if _G.WJHOUW["No MeshParts"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["No MeshParts"]) or (_G.WJHOUW.MeshParts and _G.WJHOUW.MeshParts.Destroy) then
                Inst:Destroy()
            end
        end
    end
end

coroutine.wrap(pcall)(function()
    if (_G.WJHOUW["Low Water Graphics"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["Low Water Graphics"])) then
        local terrain = workspace:FindFirstChildOfClass("Terrain")
        if not terrain then
            repeat
                task.wait()
            until workspace:FindFirstChildOfClass("Terrain")
            terrain = workspace:FindFirstChildOfClass("Terrain")
        end
        terrain.WaterWaveSize = 0
        terrain.WaterWaveSpeed = 0
        terrain.WaterReflectance = 0
        terrain.WaterTransparency = 0
        if sethiddenproperty then
            sethiddenproperty(terrain, "Decoration", false)
        end
    end
end)
coroutine.wrap(pcall)(function()
    if _G.WJHOUW["No Shadows"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["No Shadows"]) then
        Lighting.GlobalShadows = false
        Lighting.FogEnd = 9e9
        Lighting.ShadowSoftness = 0
        if sethiddenproperty then
            sethiddenproperty(Lighting, "Technology", 2)
        end
    end
end)
coroutine.wrap(pcall)(function()
    if _G.WJHOUW["Low Rendering"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["Low Rendering"]) then
        settings().Rendering.QualityLevel = 1
        settings().Rendering.MeshPartDetailLevel = Enum.MeshPartDetailLevel.Level04
    end
end)
coroutine.wrap(pcall)(function()
    if _G.WJHOUW["Reset Materials"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["Reset Materials"]) then
        for i, v in pairs(MaterialService:GetChildren()) do
            v:Destroy()
        end
        MaterialService.Use2022Materials = false
    end
end)
coroutine.wrap(pcall)(function()
    if _G.WJHOUW["FPS Cap"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["FPS Cap"]) then
        if setfpscap then
            if type(_G.WJHOUW["FPS Cap"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["FPS Cap"])) == "string" or type(_G.WJHOUW["FPS Cap"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["FPS Cap"])) == "number" then
                setfpscap(tonumber(_G.WJHOUW["FPS Cap"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["FPS Cap"])))
            elseif _G.WJHOUW["FPS Cap"] or (_G.WJHOUW.Other and _G.WJHOUW.Other["FPS Cap"]) == true then
                setfpscap(1e6)
            end
        end
    end
end)
coroutine.wrap(pcall)(function()
    if _G.WJHOUW.Other["ClearNilInstances"] then
        if getnilinstances then
            for _, v in pairs(getnilinstances()) do
                pcall(v.Destroy, v)
            end
        end
    end
end)
local Descendants = game:GetDescendants()

for i, v in pairs(Descendants) do
    CheckIfBad(v)
end
warn("FPS Booster Loaded!")

game.DescendantAdded:Connect(function(value)
    wait(0.7)
    CheckIfBad(value)
end)

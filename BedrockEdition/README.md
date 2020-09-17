# Death Swap - Minecraft Bedrock Edition

Custom Minecraft gamemode where every 5 minutes you swap positions with your opponent(s). Your goal is to make everybody die without attacking them - last person standing wins!

## Development

### Make

Run `make` to see usage.

### Packaging the binary

1. Right-click `DeathSwapBehaviourPack` and zip it (choose `Send to > Compressed (zipped) folder`).
2. Change the file extension (be renaming the file) from `.zip` to `.mcpack`.
3. Repeat steps 1 and 2 for the `DeathSwapResourcePack`
4. Select both `DeathSwapBehaviourPack` and `DeathSwapResourcePack` at the same time and zip them (choose `Send to > Compressed (zipped) folder`).
5. Change the file extension (be renaming the file) from `.zip` to `.mcaddon`.
6. Rename the file to `DeathSwap-BE-v?.?.?.mcaddon`, where `-BE-` stands for Bedrock Edition and the 3 `?`s represent the latest version of the addon.

$(VERBOSE).SILENT:
.DEFAULT_GOAL := usage

.PHONY: usage
usage:
	echo "Usage:"
	echo "=========="
	echo "make usage - displays Makefile target info"
	echo "make cpfrommc - copies the behaviour/resource packs from the Minecraft Bedrock Edition testing directories to this directory (in order to commit changes)"
	echo "make restore - restores the behaviour/resource packs from the tmp folder"

.PHONY: cpfrommc
cpfrommc:
	mkdir -p ../tmp
	mv ./DeathSwapBehaviourPack ../tmp/DeathSwapBehaviourPack_old
	mv ./DeathSwapResourcePack ../tmp/DeathSwapResourcePack_old
	cp -R C:\Users\goddt\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\development_behavior_packs\DeathSwapBehaviourPack .
	cp -R C:\Users\goddt\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\development_resource_packs\DeathSwapResourcePack .

.PHONY: restore
restore:
	mv ../tmp/DeathSwapBehaviourPack_old ./DeathSwapBehaviourPack
	mv ../tmp/DeathSwapResourcePack_old ./DeathSwapResourcePack

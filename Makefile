SRC_ICON=./src-tauri/icons/android.png
DIR_RES=./src-tauri/gen/android/app/src/main/res

.PHONY: im
# generate mobile icons on linux, by imagemagick
# sudo apt install imagemagick
# windows magick https://imagemagick.org/script/download.php
im:
	mkdir -p mipmap-hdpi mipmap-mdpi mipmap-xhdpi mipmap-xxhdpi mipmap-xxxhdpi
	magick $(SRC_ICON) -resize 162x162 mipmap-hdpi/ic_launcher_foreground.png
	magick $(SRC_ICON) -resize 49x49 mipmap-hdpi/ic_launcher_round.png
	magick $(SRC_ICON) -resize 49x49 mipmap-hdpi/ic_launcher.png
	magick $(SRC_ICON) -resize 108x108 mipmap-mdpi/ic_launcher_foreground.png
	magick $(SRC_ICON) -resize 48x48 mipmap-mdpi/ic_launcher_round.png
	magick $(SRC_ICON) -resize 49x49 mipmap-mdpi/ic_launcher.png
	magick $(SRC_ICON) -resize 216x216 mipmap-xhdpi/ic_launcher_foreground.png
	magick $(SRC_ICON) -resize 96x96 mipmap-xhdpi/ic_launcher_round.png
	magick $(SRC_ICON) -resize 96x96 mipmap-xhdpi/ic_launcher.png
	magick $(SRC_ICON) -resize 324x324 mipmap-xxhdpi/ic_launcher_foreground.png
	magick $(SRC_ICON) -resize 144x144 mipmap-xxhdpi/ic_launcher_round.png
	magick $(SRC_ICON) -resize 144x144 mipmap-xxhdpi/ic_launcher.png
	magick $(SRC_ICON) -resize 432x432 mipmap-xxxhdpi/ic_launcher_foreground.png
	magick $(SRC_ICON) -resize 192x192 mipmap-xxxhdpi/ic_launcher_round.png
	magick $(SRC_ICON) -resize 144x144 mipmap-xxxhdpi/ic_launcher.png
	mv -v -f mipmap-hdpi/* $(DIR_RES)/mipmap-hdpi/
	mv -v -f mipmap-mdpi/* $(DIR_RES)/mipmap-mdpi/
	mv -v -f mipmap-xhdpi/* $(DIR_RES)/mipmap-xhdpi/
	mv -v -f mipmap-xxhdpi/* $(DIR_RES)/mipmap-xxhdpi/
	mv -v -f mipmap-xxxhdpi/* $(DIR_RES)/mipmap-xxxhdpi/
	rm -rf mipmap-hdpi mipmap-mdpi mipmap-xhdpi mipmap-xxhdpi mipmap-xxxhdpi

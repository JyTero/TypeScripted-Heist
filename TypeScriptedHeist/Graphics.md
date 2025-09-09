Make it so that canvas height and width are nomalised between 1-100
Use images as sprites, base height/width to cavas size, use procents to set

![[Pasted image 20250818200819.png]]

Engine:
- Started in initialisation
- Runs its own timer (timer = Frame rate)
- DrawFrame() 
	- foreach layer in graphicLayers
		- Foreach sprite in SpritesToDraw
			- DrawSprite()
		- Foreach text in TextToDraw
			- DrawText()
		- Something to draw shapes

Systems add items which need to be drawn onto lists
- Begin async img loading (Look into how??)
- 
INPUTCSS := ./src/input.css
OUTPUTCSS := ./styles/dist.css

TAILWIND_RENDER_CMD := npx tailwindcss -i $(INPUTCSS) -o $(OUTPUTCSS) --minify

.PHONY: render-css
render-css: $(OUTPUTCSS)

.PHONY: watch
watch:
	$(TAILWIND_RENDER_CMD) --watch

$(OUTPUTCSS): $(INPUTCSS) index.html
	$(TAILWIND_RENDER_CMD)

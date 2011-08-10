defineLazyProperty(impl, "HTMLElement", function() {
    function HTMLElement(doc, localName, prefix) {
        this.ownerDocument = doc;
        this.localName = localName;
        this.namespaceURI = HTML_NAMESPACE;
        this.prefix = prefix;

        this.tagName = (prefix !== null)
            ? prefix + ":" + localName
            : localName;

        if (this.isHTML)
            this.tagName = toUpperCase(this.tagName);

        this.attributes = [];
        this.childNodes = [];
    }

    function reflectDOMString(attr) {
        return {
            get: function() {
                return this.getAttribute(attr);
            },
            set: function(v) {
                this.setAttribute(attr, v);
            }
        };
    }

    function reflectLimitedEnum(attr) {
        return {
            get: function() {
                nyi();
            },
            set: function(v) {
                this.setAttribute(attr, v);
            }
        };
    }

    HTMLElement.prototype = O.create(impl.Element.prototype, {
        title: reflectDOMString("title"),
        lang: reflectDOMString("lang"),
        dir: reflectLimitedEnum("dir")
    });

    // TODO

    return HTMLElement;
});

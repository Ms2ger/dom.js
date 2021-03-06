defineLazyProperty(impl, "DocumentFragment", function() {
    function DocumentFragment(doc) {
        this.ownerDocument = doc;
        this.childNodes = [];
    }

    DocumentFragment.prototype = O.create(impl.Node.prototype, {
        nodeType: constant(DOCUMENT_FRAGMENT_NODE),
        nodeName: constant("#document-fragment"),
        nodeValue: attribute(fnull, fnoop),
        // Copy the text content getter/setter from Element
        textContent: O.getOwnPropertyDescriptor(impl.Element.prototype,
                                                "textContent"),

        // Utility methods
        clone: constant(function clone() {
            return new DocumentFragment(this.ownerDocument);
        }),
        isEqual: constant(function isEqual(n) {
            // Any two document fragments are shallowly equal.
            // Node.isEqualNode() will test their children for equality
            return true;
        }),

    });

    return DocumentFragment;
});
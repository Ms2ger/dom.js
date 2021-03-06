defineLazyProperty(impl, "DocumentType", function() {
    function DocumentType(name, publicId, systemId) {
        // Unlike other nodes, doctype nodes always start off unowned
        // until inserted
        this.ownerDocument = null;
        this.name = name;  
        this.publicId = publicId || "";
        this.systemId = systemId || "";
    }

    DocumentType.prototype = O.create(impl.Leaf.prototype, {
        nodeType: constant(DOCUMENT_TYPE_NODE),
        nodeName: attribute(function() { return this.name; }),
        nodeValue: attribute(fnull, fnoop),

        // Utility methods
        clone: constant(function clone() {
            DataCloneError();
        }),
        isEqual: constant(function isEqual(n) {
            return this.name === n.name &&
                this.publicId === n.publicId &&
                this.systemId === n.systemId;
        }),
        toObject: constant(function toObject() {
            return {
                type: DOCUMENT_TYPE_NODE,
                name: this.name,
                publicId: this.publicId,
                systemId: this.sytemId
            };
        }),

    });

    return DocumentType;
});
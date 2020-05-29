<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<xsl:for-each select="projects/project">
<xsl:if test="price[. &gt; 500]">
<xsl:value-of select="product" />
</xsl:if>
</xsl:for-each>
</xsl:template>
</xsl:stylesheet>
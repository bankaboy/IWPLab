<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<xsl:for-each select="projects/project">
<xsl:choose>
<xsl:when test="price[. &lt; 500]">
<font color= "red"> <xsl:value-of select="product" /> </font>
</xsl:when>
<xsl:otherwise>
<font color= "green"> <xsl:value-of select="product" /> </font>
</xsl:otherwise>
</xsl:choose>
</xsl:for-each>
</xsl:template>
</xsl:stylesheet>
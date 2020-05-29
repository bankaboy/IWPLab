<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<xsl:for-each select="messages/note">
<xsl:sort select="@id" order="ascending"/>
<li>
<xsl:text> Note id: </xsl:text>
<font color="red"><xsl:value-of select="@id" /></font>
<xsl:text> To: </xsl:text>
<font color="red"><xsl:apply-templates select="to"/> </font>
<xsl:text> From: </xsl:text>
<font color="red"><xsl:apply-templates select="from"/> </font>
<xsl:text> Subject Heading </xsl:text>
<font color="red"><xsl:apply-templates select="heading"/> </font>
<xsl:text> Body of the text </xsl:text>
<font color="red"><xsl:apply-templates select="body"/> </font>
</li>
</xsl:for-each>
</xsl:template>
</xsl:stylesheet>
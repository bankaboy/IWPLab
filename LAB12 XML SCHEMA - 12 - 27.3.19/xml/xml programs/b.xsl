<?xml version="1.0" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<xsl:apply-templates select="states/state" />
</xsl:template>
<xsl:template match="states/state">
<font color="green">
<LI> <xsl:apply-templates /> </LI>
</font>
</xsl:template>
</xsl:stylesheet>